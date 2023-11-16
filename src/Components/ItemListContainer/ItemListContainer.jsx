import React from 'react'
import { Button } from 'react-bootstrap'


const ItemListContainer = ({title,price,img}) => {
  return (
    <div className='container'>
        
        <h2>{title}</h2>
        <img src={img} alt={title} />
        <Button className='ms-3' >{price}</Button>
        
    </div>
  )
}

export default ItemListContainer