import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Card from "../components/card/Card";

export default function MainPage() {
  return (
    <div>
      <Header />
      <Card title="Card" text="This is my card" />
      <Footer />
    </div>
  );
}
