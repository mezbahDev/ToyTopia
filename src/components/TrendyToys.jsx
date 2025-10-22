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
    <div className="max-w-[1500px] mx-auto px-5 my-[100px]">
      <h1
        className="text-5xl font-semibold mb-10 text-center text-[#242424] "
        style={{ fontFamily: "Fredoka One" }}
      >
        Trendy Toys
      </h1>

      <div className="grid grid-cols-3 mt-[100px] gap-10">
        {toys.map((toy) => (
          <Card key={toy.toyId} toy={toy} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/products", { state: { toys } })}
          className="bg-[#FBC270] text-[#00000088] font-semibold px-10 py-5 mt-5 rounded-full hover:bg-[#4178a1] transition-colors text-[20px] cursor-pointer"
        >
          Discover More
        </button>
      </div>
    </div>
  );
};

export default TrendyToys;
