import React from "react";
import { useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { Item } from "../api/Api";
import { useState, useEffect } from "react";
import Header from "./header/Header";



function ProdectDetails() {
  const { id } = useParams();
  const [data, setData] = useState({})
  useEffect(() => {
    const filterData = Item.filter((ele)=>ele.id==id)
    setData(filterData[0]);
  }, [id])
  return (
    <>
     <Header logo="E-Cart"/>
      <div className="container mx-auto md:h-screen h-[600px] md:flex md:items-center md:justify-center gap-20  ">
        <div className="img-data md:w-[40%] ">
          <img
          className="w-[100%] h-[100%]"
            src={data.imgSrc}
            alt=""
          />
        </div>
        <div className="content-data md:w-[60%] ">
          <h1 className=" md:text-left md:text-3xl text-center text-xl font-bold">{data.title}</h1>
          <div className="btn flex ml-12 gap-5 py-5">
            <button className="bg-red-500 px-8 py-1 font-semibold text-white hover:bg-black">
              {data.price} ₹
            </button>
            <button className=" bg-blue-600 px-8 py-1 hover:bg-orange-600 transition-all duration-300">
              <FaCartPlus className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProdectDetails;
