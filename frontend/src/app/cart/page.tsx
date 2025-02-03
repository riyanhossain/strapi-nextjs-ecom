import React from "react";

export default function Cart() {
  return (
    <section className="border-x border-border/60 container mx-auto flex-1 flex">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_640px] flex-1">
        <MainCart />
        <CartDetails />
      </div>
    </section>
  );
}

const MainCart = () => {
  return <div className="border-r border-border/60">Cart</div>;
};

const CartDetails = () => {
  return <div>CartDetails</div>;
};
