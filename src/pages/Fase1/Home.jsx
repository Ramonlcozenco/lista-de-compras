import {useRef, useState} from 'react'
import {v4} from 'uuid'
import './index.css'
 
function Home() {
  const [produtos, setProdutos] = useState([]) //array (lista dos produtos digitados)
  const inputRef = useRef()
  
  

  function clickAdicionar() {
    
    setProdutos([{ id: v4(), name: inputRef.current.value}, ...produtos])
    inputRef.current.value = ''
  }

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !==id))

  }
 
  return (
    <div>
      <h1>Lista de Compras</h1>
      <input id='produtoInput' placeholder="Produto..." ref={inputRef} />
      <button className='botaoAdcionar' onClick={clickAdicionar}>Adicionar</button>
      
      
      
      {produtos.map((produto) =>(
          <div className='listaProdutos' key={produto.id}>
            <p>{produto.name}</p>
           <button id='botaoLixeira' onClick={() => deletarProduto(produto.id)}>🗑️</button>
                    
          </div>
        ))} 
    </div>
  )
}


export default Home
