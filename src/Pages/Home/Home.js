import React from "react";
import Banner from "./Banner/Banner";
import VerifiyDetails from "./verifyDetails/VerifiyDetails";
import Footer from "../Shared/Footer/Footer";
import Summery from "./Summery/Summery";
import Docupass from "./Docupass/Docupass";
import VerifyCards from "./VerifyCards/VerifyCards";
import Patners from "./Patners/Patners";
import IDScannerDetails from "./IDScannerDetails/IDScannerDetails";

const Home = () => {
  return (
    <div className="bg-white">
      <Banner />
      <VerifiyDetails />
      <Summery />
      <Docupass />
      <VerifyCards />
      <Patners />
      <IDScannerDetails />
      <Footer />
    </div>
  );
};

export default Home;
