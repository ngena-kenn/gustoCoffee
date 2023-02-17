import React from 'react'
import CustomizeCard from '../card/card'
import './containerPage.scss'
import '../../css/page.css'

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
    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 100 }}>
      <div className='titre' style={{ fontSize: '35px', textAlign: 'center', padding: 10,  }}>
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