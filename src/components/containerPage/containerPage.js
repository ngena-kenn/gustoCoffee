import React from 'react'
import CustomizeCard from '../card/card'
import './containerPage.scss'

const ContainerPage = ({ data, commande, setProducts, handleAddProduct }) => {
  const cards = data?.data?.map((value, index) =>
    <CustomizeCard
      key={index}
      id={index}
      setProducts={setProducts}
      image={value?.picture}
      title={value?.title}
      description={value?.description}
      price={value?.price}
      commande={commande}
      handleAddProduct={handleAddProduct}
    />
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: 50 }}>
      <div style={{ fontSize: '35px', textAlign: 'center', padding: 10, margin: 10 }}>
        {data?.title}
      </div>
      <div className='grid'>
        <div className='grille'>
          {cards}
        </div>
      </div>
    </div>
  )
}

export default ContainerPage