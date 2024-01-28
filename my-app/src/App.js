import "./App.css";
import React from "react";
import Header from "./component/Header";
import HomeFinder from "./component/Body";
import Brand from "./component/Brand";
import Rent from "./component/Rent";
import Agent from "./component/Agent";
import Happy from "./component/Happy";
import Footer from "./component/Footer";
function App() {
  return (
    <div>
      <Header></Header>
      <HomeFinder></HomeFinder>
      <Brand></Brand>
      <Rent></Rent>
      <Agent></Agent>
      <Happy></Happy>
      <Footer></Footer>
    </div>
  );
}

export default App;
