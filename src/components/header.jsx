import React from "react";

const Header = () => {
  return (
    <header>
      <h1 className="display-4">Sneakers shop</h1>
      <h1
        style={{ fontSize: 22, textAlign: "left" }}
        className="display-4 mt-5"
      >
        Voici la liste des sneakers en stock
      </h1>
    </header>
  );
};

export default Header;
