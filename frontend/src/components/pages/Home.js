import React from "react";
<<<<<<< HEAD:frontend/src/components/pages/Home.js
import Header from "../Header";
=======
import Header from "./Header";
import Page1_body from "./Page1_body";
>>>>>>> c6b25f774138a410689a2078229451040aadb987:frontend/src/components/Home.js

const Home = ({ page }) => {
  return (
    <div className="home">
      <Header />
      <div className="homeContainer">
        <Page1_body />
        {/* the page is: {page} */}
        </div>
    </div>
  );
};

export default Home;
