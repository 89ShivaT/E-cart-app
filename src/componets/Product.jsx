import React from 'react'
import { Item } from '../api/Api';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Product() {
  return (
    <>
        <div className="w-full md:mt-28 mt-20">
        <div className="max-w-[1320px] mx-auto mt-5 grid lg:grid-cols-4 md:grid-cols-2  gap-4">
          {Item.map((ele, i) => {
            return (
              <div className="card w-full border" key={i}>
               <Link to={`/product/${ele.id}`}>
               <img className="w-full" src={ele.imgSrc} alt="" />
               </Link>
                <div className="text-black ">
                  <h2 className=" text-[14px] font-semibold leading-4  p-5 text-center">
                    {ele.title}
                  </h2>
                </div>
                <div className="btn flex  gap-5 justify-center py-5">
                  <button className="bg-red-500 px-8 py-1 font-semibold text-white hover:bg-black">
                    {ele.price} ₹
                  </button>
                  <button className=" bg-blue-600 px-8 py-1 hover:bg-orange-600 transition-all duration-300">
                    <FaCartPlus className="text-white" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Product