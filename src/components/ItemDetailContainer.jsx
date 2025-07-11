import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"; // componente presentacional

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar producto:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (!producto) return <p>No se encontró el producto.</p>;

  return (
    <div className="container my-4">
      <ItemDetail
        title={producto.title}
        description={producto.description}
        price={producto.price}
        image={producto.thumbnail}
        stock={producto.stock}
      />
    </div>
  );
};

export default ItemDetailContainer;
