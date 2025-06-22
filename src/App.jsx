import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer mensaje="Productos" />
    </>
  );
}

export default App;
