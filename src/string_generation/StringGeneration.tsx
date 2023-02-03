import React from "react";

const StringGeneration = () => {
  return (
    <div className="container p-5 ">
      <div className="col-8 m-auto">
        <div className="card">
          <div className="card-header">
            <h3 className="">React Conditional String generation</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title mb-4">Rule Group</h5>
            <div className="d-flex">
              <p className="me-3">Product(s) must match</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Condition"
                />
                <label className="form-check-label me-3">Disabled radio</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Condition"
                />
                <label className="form-check-label">Disabled radio</label>
              </div>
            </div>
            <div className=" m-auto mb-4 d-flex justify-content-between">
              <select className="inp">
                <option>Title</option>
                <option>Quantity</option>
                <option>Price</option>
                <option>Brand</option>
              </select>
              <select className="inp">
                <option>Title</option>
                <option>Quantity</option>
                <option>Price</option>
                <option>Brand</option>
              </select>
              <input className="inp" />
              <button className="btn text-light">hjghjgj</button>
            </div>
            <div className=" m-auto mb-4 d-flex justify-content-between">
              <select className="inp">
                <option>Title</option>
                <option>Quantity</option>
                <option>Price</option>
                <option>Brand</option>
              </select>
              <select className="inp">
                <option>Equals</option>
                <option>Not Equals</option>
                <option>Contain </option>
                <option>Not Contain</option>
              </select>
              <input className="inp" />
              <button className="btn btn-danger">Delete</button>
            </div>
            <button className="btn btn-primary">Add More</button>
             <p>Current Condition(s): title==abc && </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringGeneration;
