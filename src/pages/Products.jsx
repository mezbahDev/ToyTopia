import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Products = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {toys.map((toy) => (
          <Card key={toy.toyId} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default Products;
