import Header from './components/Header'
import Guitar from './components/Guitar'
import { db } from './data/guitars'
import useCart from './hooks/useCart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, resetCart, handleCart } = useCart();

  return (
    <>
      <Header
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
        resetCart={resetCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            db.map(guitar =>
              <Guitar
                key={guitar.id}
                guitar={guitar}
                handleCart={handleCart}
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

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
      />
    </>
  )
}

export default App