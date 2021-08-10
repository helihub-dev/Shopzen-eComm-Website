import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";

const Home = () => {
  return (
    <>
      <div className="jumbotron text-danger h1 font-weight-bold text-center" style={{backgroundColor: "#fbdff0"}}>
        <Jumbotron text={["Shopzen", "Heli Vachhani", "Mitsu Kansagara"]} />
      </div>

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron" style={{backgroundColor: "#fbdff0"}}>
        New Arrivals
      </h4>
      <NewArrivals />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron" style={{backgroundColor: "#fbdff0"}}>
        Best Sellers
      </h4>
      <BestSellers />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron" style={{backgroundColor: "#fbdff0"}}>
        Shop By Brands
      </h4>
      <CategoryList />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron" style={{backgroundColor: "#fbdff0"}}>
        Shop By Categories
      </h4>
      <SubList />

      <br />
      <br />
    </>
  );
};

export default Home;
