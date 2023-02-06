import React, { useRef, useState } from "react";
const StringGeneration = () => {
  let keysValue = {
    Title: "String",
    Quantity: "number",
    price: "number",
    Brand: "string",
  };
  let stringCondition = {
    equals: "==",
    "not-equals": "!=",
    contain: "%LIKE%",
    "not-contain": "!%LIKE%",
  };
  let intConditions = {
    equals: "==",
    "not-equals": "!=",
    "Less-Than-equals": "<=",
    "Greater-than-equals": " >= ",
  };
  const [condition, setCondition] = useState<any>(stringCondition);
  const [arr, setArr] = useState<any>([
    { content: "title", condition: "==", quantity: "" },
  ]);
  const [selCondition, setConditions] = useState<any>("&&");
  const selectRef1 = useRef<HTMLSelectElement>(null);
  const inpRef = useRef<any>([]);
  let x = "";
  const radioSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == "All Condition") {
      console.log("fdsg");
      setConditions("&&");
    } else {
      setConditions("||");
    }
  };
  const selectHandler = (e: any, i: number) => {
    arr[i].content = e.target.value;
    setArr([...arr]);
    if (e.target.value == "Title" || e.target.value == "Brand") {
      setCondition(stringCondition);
    } else {
      setCondition(intConditions);
    }
  };
  const conditionHandler = (e: any, i: number) => {
    arr[i].condition = e.target.value;
    setArr([...arr]);
  };
  const inpHandler = (e: any, i: any) => {
    console.log(e.target.value);
    arr[i].quantity = e.target.value;
    setArr([...arr]);
  };
  const addRow = () => {
    console.log(arr[arr.length - 1].quantity);
    if (arr[arr.length - 1].quantity == "") {
      alert("Please fill the field");
    } else {
      arr.push({ content: "title", condition: "==", quantity: "" });
      setArr([...arr]);
    }
  };
  const deleteRow = (i: number) => {
    console.log(i);
    arr.splice(i, 1);
    setArr([...arr]);
  };
  console.log(arr);
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
                  onChange={radioSelect}
                  className="form-check-input"
                  defaultChecked
                  type="radio"
                  name="Condition"
                  value="All Condition"
                />
                <label className="form-check-label me-3">All Condition</label>
              </div>
              <div className="form-check">
                <input
                  onChange={radioSelect}
                  className="form-check-input"
                  type="radio"
                  name="Condition"
                  value="Any Condition"
                />
                <label className="form-check-label">Any Condition</label>
              </div>
            </div>
            {arr.map((item: any, i: number) => {
              return (
                <>
                  <div
                    key={item.toString() + i}
                    className=" m-auto mb-4 d-flex justify-content-between"
                  >
                    <select
                      className="inp"
                      onChange={(e) => selectHandler(e, i)}
                      ref={selectRef1}
                      value={item.content}
                    >
                      {Object.keys(keysValue).map((item) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </select>
                    <select
                      className="inp"
                      onChange={(e) => conditionHandler(e, i)}
                      value={item.condition}
                    >
                      {Object.values(condition).map((item: any) => {
                        return <option>{item}</option>;
                      })}
                    </select>
                    <input
                      type="text"
                      className="inp"
                      value={item.quantity}
                      onChange={(e) => inpHandler(e, i)}
                    />
                    {i !== 0 ? (
                      <button
                        className="btn btn-danger "
                        onClick={() => deleteRow(i)}
                      >
                        Delete
                      </button>
                    ) : (
                      <button className="btn text-light" disabled>
                        hjghjgj
                      </button>
                    )}
                  </div>
                </>
              );
            })}
            <button className="btn btn-primary" onClick={addRow}>
              Add More
            </button>
            <span> Condition :</span>
            {arr.map((item: any) => {
              return (
                <span>
                  {item.content} = {item.condition} {item.quantity}{" "}
                  {selCondition}{" "}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringGeneration;
