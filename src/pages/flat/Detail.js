import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

function FlatDetail() {
  let { id } = useParams();
  let [flat, setFlat] = useState(null);
  let [here, setHere] = useState(null);

  useEffect(() => {
    let url = `https://musofir.pythonanywhere.com/api/v1/flat/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setFlat(res);
        setHere(true);
      });
  }, []);

  console.log(flat);
  if (here) {
    return (
      <div className="container detail-container">
        <h2 className="detail-title">2 Xonali / 80m2 uy ijaraga beriladi</h2>
        <div className="detail-location-container">
          <i className="fas fa-map-marker-alt"></i>
          <span>
            {flat.city.country.name}, {flat.city.name}, {flat.address}
          </span>
        </div>

        <div className="detail-main-section-container">
          {flat.images[0] ? (
            <img
              src={flat.images[0].image}
              alt=""
              className="img-fluid detail-main-card"
            />
          ) : (
            ""
          )}

          <div className="user-container">
            <div className="user-about-container">
              <i className="fas fa-user-circle user-img"></i>
              <div className="user-about">
                <p className="user-name">
                  {flat.user.last_name} {flat.user.first_name}
                </p>
                <p className="renter-phone">{flat.user.phone_number}</p>
                <div className="price-container">
                  <h3 className="detail-price">
                    {flat.price} <p> $</p>
                  </h3>
                </div>
                <div className="detail-about-container">
                  <h4>Batafsil</h4>
                  <p>Xonalar soni: {flat.number_of_rooms}</p>
                  <p>Qavat: {flat.floor_of_flat}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-about-content-container">
          <div>
            <div className="detail-images-container">
              {flat.images.map((imageObj, index) => {
                return index ? (
                  <img
                    className="detail-about-images"
                    alt=""
                    src={imageObj.image}
                  />
                ) : (
                  ""
                );
              })}
            </div>
            <p className="detail-date-text">
              {flat.created_at.split("T")[0]} |{" "}
              {flat.created_at.split("T")[1].split(".")[0]}
            </p>
            <div>
              <h2>Qoshimcha</h2>
              <p>{flat.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border mt-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}

export default FlatDetail;
