/* eslint-disable react/prop-types */
import Item from './Item';

const Header = ({ cart, increaseQuantity, decreaseQuantity, removeFromCart, resetCart }) => {
  const isCartEmpty = cart.length === 0;
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img className="img-fluid" src="./img/logo.svg" alt="imagen logo" />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img className="img-fluid" src="./img/carrito.png" alt="imagen carrito" />

              <div id="carrito" className="bg-white p-3">
                {
                  isCartEmpty
                    ? <p className="text-center">El carrito esta vacio</p>
                    :
                    <>
                      <table className="w-100 table">
                        <thead>
                          <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            cart.map(guitar =>
                              <Item
                                key={guitar.id}
                                guitar={guitar}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                                removeFromCart={removeFromCart}
                              />
                            )
                          }
                        </tbody>
                      </table>

                      <p className="text-end">Total pagar: <span className="fw-bold">${total}</span></p>
                      <button
                        onClick={resetCart}
                        className="btn btn-dark w-100 mt-3 p-2">
                        Vaciar Carrito
                      </button>
                    </>
                }
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header