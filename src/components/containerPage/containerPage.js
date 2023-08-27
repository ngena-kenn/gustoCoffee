import React from 'react'
import CustomizeCard from '../card/card'
import '../../css/containerPage.scss'
import '../../css/page.css'
import SideBar from '../../body/Espaces'

const ContainerPage = ({ data, commande, setProducts, handleAddProduct }) => {
  const cards = data?.data?.map((value, index) =>
    <CustomizeCard
      key={index}
      id={index}
      setProducts={setProducts}
      image={value?.picture}
      image1={value?.picture1}
      image2={value?.picture2}
      title={value?.title}
      description={value?.description}
      price={value?.price}
      commande={commande}
      handleAddProduct={handleAddProduct}
    />
  );
  
  return (
    <div className="container">
      <div className="">
        {<SideBar/>}
      </div>
    <div className="" style={{ display: 'flex', flexDirection: 'column', paddingTop: 100, paddingLeft: 200 }}>
      <div className='titre' style={{ fontSize: '35px', textAlign: 'center', padding: 10 }}>
        {data?.title}
      </div>
      <div className='grid'>
      <div className='grille'>
        {cards}
      </div>
    </div>
  </div>
  </div>
  )
}

export default ContainerPage