import React from "react";

const MenuItem = () => {
  return (
    <div className="col-12 col-lg-6 mb-2">
          <div className="d-flex flex-column flex-sm-row">
            <img
              src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
              className="menu-item-img mb-2"
              alt="food"
            />
            <div className="menu-item-content">
              <div className="mt-auto">
                <div className="heading d-flex content-between">
                  <h4 className="menu-name">Buttermilk Pancakes</h4>
                  <h4 className="price">$15</h4>
                </div>
                <p className="desc">
                  I'm baby woke mlkshk wolf bitters live-edge blue bottle,
                  hammock freegan copper mug whatever cold-pressed
                </p>
              </div>
            </div>
          </div>
        </div>
  );
};

export default MenuItem;
