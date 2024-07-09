import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";

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

function Header() {
  return (
    <header className="header">
      <h1>Fast Food hell!</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>our menu </h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return <Pizza pizzeObj={pizza} key={pizza.name} />;
        })}
      </ul>
    </main>
  );
}
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzeObj.photoName} alt={props.pizzeObj.name} />

      <div className="pizza-info">
        <h3>{props.pizzeObj.name}</h3>
        <p>{props.pizzeObj.ingredients}</p>
        <span>${props.pizzeObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.We currently open.
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Test />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
