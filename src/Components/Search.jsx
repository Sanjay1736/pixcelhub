import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Search = () => {
    let { imgName } = useParams()
    const [data,setData]=useState([])
  useEffect(() => {
    axios
        .get(`https://pixabay.com/api/?key=32402402-f8bb738a86a346316c0783694&q=${imgName}+flowers&image_type=photo`).then(
          res=>setData(res.data.hits)
      )
  }, []);
    return (
      <div className="container">
        <div className="row">
          {data &&
            data.map((imgObj) => (
              <div className="col-md-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={imgObj.largeImageURL}
                    height="250px"
                    width="260px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{imgObj.tags}</h5>
                    <a href={imgObj.previewURL} className="btn btn-link">
                      {" "}
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
};

export default Search;
