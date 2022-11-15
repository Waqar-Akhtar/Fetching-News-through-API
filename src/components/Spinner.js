// import React, { Component } from 'react'
import loadingimg from './img/loading.gif'


import React from 'react'

export default function Spinner() {
  return (
    <div className='container text-center'>
        <img src={loadingimg} alt="Loading.." />
      </div>
  )
}


