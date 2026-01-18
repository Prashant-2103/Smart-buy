

export const Items = (props) => {
  // console.log(props)
  return (
    <div>
        <img src={props.img} alt=" Product Image" height='200px' width='auto' />
        <p>{props.title}</p>
        <h2>{props.price}</h2>
        <div className="purchase">
          <button id="buy">Buy</button>
        <button id="cart" onClick={props.handleAdd} disabled={props.isAdded}> { props.isAdded ? "Added" : "Add to cart"}</button>
        </div>
    </div>
  )
}
