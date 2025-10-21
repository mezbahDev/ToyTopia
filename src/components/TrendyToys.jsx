import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const TrendyToys = () => {
  const [toys, setToys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setToys(data.slice(0, 6)))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="max-w-[1500px] mx-auto px-5 my-10">
      <h1 className="text-3xl font-semibold mb-10 text-center">Trendy Toys</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {toys.map((toy) => (
          <Card key={toy.toyId} toy={toy} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/products")}
          className="bg-[#559BD7] text-white font-semibold px-10 py-5 rounded-full hover:bg-[#4178a1] transition-colors text-[20px] cursor-pointer"
        >
          Discover More
        </button>
      </div>
    </div>
  );
};

export default TrendyToys;
