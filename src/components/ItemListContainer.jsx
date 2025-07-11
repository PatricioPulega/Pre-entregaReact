import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ mensaje }) => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = categoryId
      ? `https://dummyjson.com/products/category/${categoryId}`
      : "https://dummyjson.com/products";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="container my-4">
      <h2>{mensaje || "Productos"}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
