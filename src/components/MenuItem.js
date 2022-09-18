import React from "react";

const MenuItem = (props) => {
    const {name,img,price,description} = props.item
  return (
    <div className="col-12 col-lg-6 mb-2">
          <div className="d-flex flex-column flex-sm-row">
            <img
              src={img}
              className="menu-item-img mb-2"
              alt="food"
            />
            <div className="menu-item-content">
              <div className="mt-auto">
                <div className="heading d-flex content-between">
                  <h4 className="menu-name">{name}</h4>
                  <h4 className="price">${price}</h4>
                </div>
                <p className="desc">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
  );
};

export default MenuItem;
