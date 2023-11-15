import React from 'react'

const ItemListContainer = (img,title,price,childen) => {
  return (
    <div>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{price}</p>
    </div>
  )
}

export default ItemListContainer