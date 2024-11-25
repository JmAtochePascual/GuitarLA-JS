/* eslint-disable react/prop-types */

const Item = ({ guitar, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  const { name, price, image, quantity } = guitar;

  return (
    <tr key={guitar.id}>
      <td>
        <img className="img-fluid" src={`./img/${image}.jpg`} alt={`imagen de ${name}`} />
      </td>
      <td>{name}</td>
      <td className="fw-bold">{price}</td>
      <td className="flex align-items-start gap-4">
        <button
          type="button"
          onClick={() => decreaseQuantity(guitar)}
          className="btn btn-dark">
          -
        </button>
        {quantity}
        <button
          type="button"
          onClick={() => increaseQuantity(guitar)}
          className="btn btn-dark">
          +
        </button>
      </td>
      <td>
        <button
          type="button"
          onClick={() => removeFromCart(guitar)}
          className="btn btn-danger">
          X
        </button>
      </td>
    </tr>
  )
}

export default Item;
