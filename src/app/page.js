'use client'

import { useState } from 'react'
import Image from 'next/image'
import '@styles/home.css'

export default function Home() {

  const [nama, setNama] = useState('Marcelinda Starlynn')
  const [inputText, setInputText] = useState('')

  function handlerGantiNama(){
    setNama(inputText)
    setInputText('')
  }

  function handleInputChange(event) {
    setInputText(event.target.value)
  }

  if (typeof window !== 'undefined') {
    document.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        handlerGantiNama();
      }
    });
  }

  function handleClick() {
    if (inputText.trim() === '') {
      alert('Input is empty!'); // Menampilkan alert jika input kosong
      setInputText('')
    } else {
      handlerGantiNama(); // Memanggil fungsi ganti nama jika input tidak kosong
    }
  }
  
  
  return (
    <>
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
              placeholder="Write your name"
            />
          <div
            className={`cta-button ${inputText.trim() === '' ? 'disabled' : ''}`}
            style={{
              marginTop: '12px',
              backgroundColor: inputText.trim() === '' ? '#ccc' : '', // Warna abu-abu saat tombol dinonaktifkan
            }}
            onClick={handleClick} // Menggunakan handleClick yang menangani logika klik tombol
          >
            <p>{inputText.trim() === '' ? 'Disabled' : 'Change Name'}</p>
          </div>
        </div>
      </div>
    </>
  )
}
