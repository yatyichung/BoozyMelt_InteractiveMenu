import React from 'react';

export default function Categories({ itemsByCategory  }) {



  return (
    <>
      <div className='container custom-btn-container mt-5'>
      
        <button type="button" className="custom-btn py-2" onClick={() => itemsByCategory('all')}>All</button>
        <button type="button" className="custom-btn py-2" onClick={() => itemsByCategory('alcoholic')}>Alcoholic</button>
        <button type="button" className="custom-btn py-2" onClick={() => itemsByCategory('non-alcoholic')}>Non-Alcoholic</button>
      </div>
   
    </>
  )
}