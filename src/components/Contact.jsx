import React from 'react'
import BannerPng from '../assest/banner.png'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className="leftSide" style={{ backgroundImage: `url(${BannerPng})` }}></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geç</h1>
        <form>
          <label>Ad Soyad</label>
          <input type="text" name='name' placeholder='Lütfen adınızı soyadınızı giriniz ...'/>
          <label>Email adresi</label>
          <input type="email" name="email" placeholder='Lütfen emailinizi giriniz ...' />
          <label>Mesajınız</label>
          <textarea name='message' rows="6" placeholder='Lütfen mesajını giriniz'></textarea>

        </form>
      </div>
      
    </div>
  )
}

export default Contact
