import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();
  const [imgName, setImageName] = useState("");
  return (
    <div className="home-container">
      <input
        type="text"
        size="80"
        placeholder="Search Here"
        onChange={(e) => setImageName(e.target.value)}
      />
      <br></br>
      <button
        id="btn"
        onClick={() => imgName && navigate(`/search/${imgName}`)}
      >
        Search
      </button>
    </div>
  );
};

export default Home;
