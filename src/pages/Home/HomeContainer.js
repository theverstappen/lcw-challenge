import React from "react";
import HomeView from "./HomeView";
import Header from '../../components/Header'
import Footer from '../../components/Footer'


export function HomeContainer() {
  return (
    <div>
      <Header />
      <HomeView title="Home" />
      <Footer />
    </div>
  );
}
