import { BillingForm } from "@/components/billing-form";
import React from "react";

export default function Checkout() {
  return (
    <section className="border-x border-border/60 container mx-auto flex-1 flex">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_640px] flex-1">
        <BillingInfo />
        <OrderSummary />
      </div>
    </section>
  );
}

function BillingInfo() {
  return (
    <section className="border-r border-border/60 py-6 px-8">
      <BillingForm />
    </section>
  );
}

function OrderSummary() {
  return <div className="py-6 px-8">Order</div>;
}
