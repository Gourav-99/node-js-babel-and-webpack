import React, { useState } from "react";
import { nanoid } from "nanoid";
const Home = () => {
  const [arr, setArr] = useState(["hello", "welcome", "bye"]);
  const addItem = () => {
    setArr((prevState) => ["new Item", ...prevState]);
  };
  return (
    <div>
      <h1 className="text-center my-4 text-xl bold">Home</h1>
      <div onClick={() => addItem()}>btn</div>
      {arr.map((item) => {
        return (
          <div key={nanoid()}>
            {item}
            <input type="text" />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
