import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await response.json();
    setData(jsonData);
    setShowTable(true);
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {showTable && <Child data={data} />}
    </div>
  );
};

export default Parent;
