import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();
  const [imgName, setImageName] = useState("");
  return (
    <div className="bgimage">
      <div className="parent">
        <h1 className="brandName">PixelHub</h1>
        {/* <div className="authentication">
          <button>Login</button>
          <button>Signup</button>
        </div> */}
      </div>
      <br />
      <div id="hero">
        <h1>Stunning Free Images & Royality free stock</h1>
        <h2>
          Over 2.3 million+ High Quality Images Stock Images we can find for you{" "}
        </h2>
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
    </div>
  );
};

export default Home;
