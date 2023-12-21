import React from "react";
import backgroundImage from "../components/images/image5.jpg"; // Replace with the path to your background image

const Home = () => {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Full viewport height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styles}>
      <h1 className="text-3xl sm:text-5xl text-white" style={{ fontFamily: 'monospace' }}>
        Scholar Supplies
      </h1>
      <h2 className="text-3xl sm:text-3xl text-white">
        Blockchain powered student support for essential resources Charity platform
      </h2>
    </div>
  );
};

export default Home;
