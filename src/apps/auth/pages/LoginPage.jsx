import { useState } from 'react'
import '../styles/auth.css'
import DataInput from '../components/data-input.jsx'
import {label} from '../components/data.js'



function App() {
  

  return (
    <>
      <div className='container'>
        <div className='label-container'>
          <p className='label-element'>Вход</p>
          <button className='label-element' id='close'>X</button>
        </div>
        <form className='auth-block'>
          <DataInput type = 'email' text = {label[0].text} input = {label[0].input} />
          <DataInput type = 'password' text = {label[1].text} input = {label[1].input} />
          <button id='sign-in'>Войти</button>
          <div id='reg-label'>Нет аккаунта? <a href="/register"> Зарегистрироваться</a></div>
        </form>
      </div>
      <div className='dark-back'>

      </div>
    </>
  )
}

export default App
