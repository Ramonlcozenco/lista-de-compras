
import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import './index.css'

 
function Home2() {
  const [produtos, setProdutos] = useState([]) //array (lista dos produtos digitados)
  const [produtoAtual, setProdutoAtual] = useState('')
  
  function adicionarProduto() {
    setProdutos(prev =>([{ id: uuid(), name: produtoAtual}, ...prev]))
    setProdutoAtual('')
  } 

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  }
 
  return (
    <div>
      <h1>Lista de Compras</h1>
      <input id='produtoInput' placeholder="Produto..." onChange={(e) => setProdutoAtual(e.target.value)} value={produtoAtual} />
      <button className='botaoAdcionar' onClick={adicionarProduto} disabled={!produtoAtual}>Adicionar</button>
      
      
      
      {produtos.map((produto) =>(
          <div className='listaProdutos' key={produto.id}>
            <p>{produto.name}</p>
            <button id='botaoLixeira' onClick={() => deletarProduto(produto.id)}>🗑️</button>
          
          </div>
      
        ))} 
        
          
        
    </div>
  )
}


export default Home2
