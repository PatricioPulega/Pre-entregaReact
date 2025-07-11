import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={producto.thumbnail}
          alt={producto.title}
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">{producto.title}</h3>
          <p className="card-text">Precio: ${producto.price}</p>
          <Link to={`/item/${producto.id}`} className="btn btn-secondary">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
