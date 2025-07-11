import ItemCount from "./ItemCount";
const handleAddToCart = (cantidad) => {
  console.log(`Agregado al carrito: ${cantidad} unidades`);
};

const ItemDetail = ({ title, description, price, image, stock }) => {
  return (
    <div className="card mx-auto" style={{ maxWidth: "500px" }}>
      <img
        src={image}
        alt={title}
        className="card-img-top img-fluid"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <p className="card-text">Precio: ${price}</p>
        <p className="card-text">Stock: {stock}</p>
        <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
      </div>
    </div>
  );
};
export default ItemDetail;
