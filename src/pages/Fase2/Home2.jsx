
import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import { useOnKeyPress } from './hook/useOnKeyPress'
import './index.css'


 
function Home2() {
  const [produtos, setProdutos] = useState([]) //array (lista dos produtos digitados)
  const [produtoParaEditar, setProdutoParaEditar] = useState() //Estado que salva o produto que esta sendo editado
  const [nomeProduto, setNomeProduto] = useState('') //input


 

  function limparDados(){
  setProdutoParaEditar(undefined)
  setNomeProduto("")
  }

  function salvarProduto() { //Checando se estamos editando ou não, através do produtoParaEditar existindo 
                            
    
    if(!!produtoParaEditar) {//(usamos o !! para checar se um valor é verdadeiro)

      
      const novosProdutos = produtos.map(prod => {  //criamos um novo array com o .map
       
        if(prod.id === produtoParaEditar.id){  //Checamos o id do prod com o id do produtoParaEditar, para que a gente consiga de fato alterar o prod certo
          
          prod.title = nomeProduto //alteramos o prod.title pq queremos alterar justamente o title com o nomeProduto (que é o q estiver no input)
        }
        
        return prod //retornamos o prod, porque estamos dentro de um map, e sempre precisamos retornar o valor de cada item que queremos
      })

      
      setProdutos(novosProdutos) // colocamos nosso novo array, na variavel de estado, substituindo o array antigo

      limparDados() //resetamos as variaveis de controle

      return;
    }
      
   
    setProdutos(prev =>([{ id: uuid(), title: nomeProduto}, ...prev])) //Adiciona um novo produto e só
    limparDados()
  } 
   
 function editarProduto(produto){
    
    setProdutoParaEditar(produto) //Aqui vai salvar o produto, para poder ter o ID e o title e conseguir mexer nele
    setNomeProduto(produto.title)//Aqui ele vai resetar o valor do input
  }


 function deletarProduto(id){  
  setProdutos(produtos.filter(produto => produto.id !== id))
 } 
 
useOnKeyPress(salvarProduto, 'Enter');



 return (
    <div>
      <h1>Lista de Compras</h1>
      <input id='produtoInput' placeholder="Produto..." onChange={(e) => setNomeProduto(e.target.value)} value={nomeProduto} />
      <button className='botaoAdcionar' onClick={salvarProduto} >{!!produtoParaEditar ? 'Salvar' : "Adicionar"}</button>

      {produtos.map((produto) =>(
          <div className='listaProdutos' key={produto.id} style= {{

            border: produto.id === produtoParaEditar?.id ? "2px solid green"  : undefined 
          }}>
            <p>{produto.title}</p>
              <div>
                  <button id='botaoAlterar' onClick={() => editarProduto(produto)}  >✏️</button>
                  <button id='botaoLixeira' onClick={() => deletarProduto(produto.id)}>🗑️</button>
              </div>
          </div>
        ))} 
    </div>
  )
}


export default Home2
