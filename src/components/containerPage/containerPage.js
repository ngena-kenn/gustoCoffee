import React from 'react'
import CustomizeCard from '../card/card'
import './containerPage.scss'

const ContainerPage = ({ data }) => {
  const cards = data?.data?.map((value, index) =>
    <CustomizeCard 
      image={value?.picture}
      title={value?.title}
      description={value?.description}
      price={value?.price}
    />
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ backgroundColor: 'yellow', fontSize: '35px', textAlign: 'center', padding: 10, margin: 10 }}>
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