import React from "react";
import './MenuCard.css'

const MenuCard = ({ menuData }) => {
  return (
    <div>
      <section className="main-card-container">
        {menuData.map((curElem) => {
          return (
            <div>
              <div className="card-container" key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number">{curElem.id}</span>
                    <span className="card-author">{curElem.name}</span>
                    <h2 className="card-title">{curElem.name}</h2>
                    <span className="card-description">
                      i love maggi i love maggii love maggii love maggii love
                      maggii love maggii love maggii love maggii love maggii
                      love maggii love maggii love maggii love maggii love
                      maggii love maggii love maggii love maggii love maggii
                      love maggii love maggii love maggii love maggii love
                      maggii love maggii love maggii love maggii love maggii
                      love maggii love maggii love maggi
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={curElem.image} alt="images" className="card-media"/>

                  <span className="card-tag  subtle">Oder Now</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default MenuCard;
