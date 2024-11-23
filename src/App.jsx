import Header from './components/Header'
import Guitar from './components/Guitar'
import { db } from './data/guitars'
import { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState([]);

  // Increase the quantity of a guitar in the cart
  const increaseQuantity = id => cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);

  // Add a guitar to the cart or increase its quantity
  const addToCart = guitar => {

    // Check if the guitar is already in the cart
    const alreadyInCart = cart.some(item => item.id === guitar.id);

    alreadyInCart
      ? setCart(increaseQuantity(guitar.id))
      : setCart([...cart, { ...guitar, quantity: 1 }]);
  }

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            db.map(guitar =>
              <Guitar
                key={guitar.id}
                guitar={guitar}
                addToCart={addToCart}
              />
            )
          }
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App