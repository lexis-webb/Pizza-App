import React from 'react'

function Footer() {
    return (
      <footer className='footer'>
          <div className="order">
               {new Date().toLocaleTimeString()} We are currently open
               <button className="btn">Order</button>
          </div>
      </footer>
    );
  }

export default Footer