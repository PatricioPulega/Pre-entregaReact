import React from "react";
function ItemListContainer({ mensaje }) {
  return (
    <section className="container py-5">
      <h2>{mensaje}</h2>
    </section>
  );
}

export default ItemListContainer;
