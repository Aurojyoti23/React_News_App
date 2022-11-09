import React, { Component } from 'react'
import loading from './loading.gif'

const Spinner = ()=> {
  
    return (
      <div className='text-center'>
        <img style={{width: '30px'}} src={loading} alt="loading" />
        <img style={{width: '40px'}} src={loading} alt="loading" />
        <img style={{width: '65px'}} src={loading} alt="loading" />
        <img style={{width: '40px'}} src={loading} alt="loading" />
        <img style={{width: '30px'}} src={loading} alt="loading" />
      </div>
    )
    
}

export default Spinner
