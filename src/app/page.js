'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {

  const [nama, setNama] = useState('Marcelinda Starlynn')
  const [inputText, setInputText] = useState('')

  function handlerGantiNama(){
    setNama('Linda')
  }

  
  function handlerGantiNama(){

    if (inputText.trim() !== '') {
      setNama(inputText)
      setInputText('')
    } else {
      setInputText('')
    }
  }

  function handleInputChange(event) {
    setInputText(event.target.value)
  }
  
  return (
    <div className='body'>
      <div className="banner-container">
        {/* Kartunya */}
        <div className="header-banner-wrapper">
          {/* Foto Profil dan Nama */}
          <div className="profile-header-banner">
            {/* Foto Profil*/}
            <Image
              src="/assets/profile.png"
              alt="Picture of the author"
              fill
              objectFit='contain'
            />
          </div>
          <div className="content-header-banner">
            {/* Nama dan Kawan2*/}
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
            {/* NIM dan BIO*/}
            <p>D121211036</p>
            <p>Believe in yourself</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* Tombol CTA */}
          <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
            />
          <div className='cta-button' 
            style={{
              marginTop: '12px'
            }} 
            onClick={handlerGantiNama}>
            <p>Change Name</p>
          </div>
        </div>
      </div>
    </div>
  )
}