import React from 'react'
import Pizza from './Pizza'

function Menu(props) {
    console.log(props.pizzaData);
    return (
      <main className="menu">
          <h2>Our Menu</h2>
          <ul className="pizzas">
        {props.pizzaData.map((pizza) => (
          
            <Pizza
            key= {pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            photoName={pizza.photoName}
            price={pizza.price}
          />  
         
          
        ))}
         </ul>
  
      </main>
    );
  }
  
  export default Menu;