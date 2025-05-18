import React from "react";
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import "./index.css"


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App(){
  return(
  <div className="container">
    <Header/>
    <Menu/>
    <Footer/>


  </div>
  );
}
function Header(){
  // const style = { fontSize:"48px" , color:"red" , textTransform:"uppercase"  }
  const style = { }
  return(
    <header className="header">
      <h1 style={style} >fast react pizza co </h1>
    </header>
  )
}
function Pizza({pizzaObject}){
  // console.log(props)
  console.log(pizzaObject)
  // if(pizzaObject.soldOut) return null;
  return (

  <li className={`pizza ${pizzaObject.soldOut ? 'sold-out' :''}`}>
    <img src={pizzaObject.photoName}/>
    <div>

    <h3>{pizzaObject.name}</h3>
    <p>{pizzaObject.ingredients}</p>
    <span>{pizzaObject.soldOut? "SOLD OUT":pizzaObject.price }</span>
    </div>
  </li>
  );
}
function Menu(){
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return(
    <main className="menu">
    <h2>our menu</h2>

    {numPizzas > 0 ?(
      <React.Fragment>
      <p>
        adlfsfjsklfsklfslfsklf dlfslfj sflskjfkls sldfjslk
      </p>
    <ul className="pizzas">
      {pizzaData.map(pizza => <Pizza pizzaObject={pizza} key={pizza.name}/> )}
    </ul>
    </React.Fragment>
):<p>w still working on our mnue , please waite </p>}
    {/* <div>
      {pizzaData.map(pizza => <Pizza name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} photoName={pizza.photoName} soldOut={pizza.soldOut}/> )}
    </div> */}

    </main>
  )
}
function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour>=openHour&& hour<=closeHour;
  console.log(isOpen);
  return <footer className="footer">{isOpen ? <Order closeHour={closeHour} openHour={openHour}/>

  :  <p>
  we are happy to welcome you in   {openHour}:00 . to {closeHour}
</p>}</footer>
  // return React.createElement("footer" , null , "we'r curretnly open ")
}
function Order({closeHour , openHour}){
  return(
  <div className="order">
  <p>
    we are open untill  {closeHour}:00 .come visit us or order online
  </p>
  <button className="btn">order</button>

</div>

)}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<App/>
</React.StrictMode>
);
