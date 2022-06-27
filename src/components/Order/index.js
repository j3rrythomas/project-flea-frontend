import React from "react";
import PropTypes from "prop-types";

const Order = ({ data }) => {
  return (
    <div className="bg-green mt-12 w-11/12 lg:w-9/12  lg:h-80 mx-auto lg:mx-0 lg:ml-20 shadow-xl">
      <div className="bg-[#E0C7C7] h-1/5 flex-row pt-1 hidden lg:flex">
        <div className="flex w-4/6 justify-left gap-32 ml-8">
          <div className="text-center text-black">
            <p>Order placed</p>
            <p className="font-semibold">
              {new Date(data.createdAt).toDateString()}
            </p>
          </div>

          <div className="text-center text-black">
            <p>Ship to</p>
            <p className="font-semibold">Trivandrum</p>
          </div>
        </div>
        <div className="w-2/6 flex justify-end mr-4">
          <div className="flex flex-row gap-2 text-black items-center">
            Order ID:<p className="font-semibold">#{data._id}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF] h-fit lg:h-4/5 lg:flex flex-row">
        <div className="h-full lg:w-3/12 items-center lg:pl-4">
          <div className="bg-gray h-[180px] lg:w-[226px] my-4 mt-6 carousel carousel-vertical rounded-box scrollbar-default">
            {data.items.map((item) => (
              <div
                className="carousel-item h-full justify-center relative"
                key={item.product_id + "img"}
              >
                <img src={item.image} className="z-10" />
                <img
                  src={item.image}
                  className="h-full w-full absolute top-0 left-0 blur-md"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="h-full pt-5 lg:w-6/12 text-black lg:flex flex-col lg:justify-between">
          <div className="text-center lg:text-left">
            {data.items.map((item, index) => {
              return (
                <p key={item.product_id + index}>
                  {item.description}
                  {index !== data.items.length - 1 && ","}
                </p>
              );
            })}
          </div>

          <div className="text-center text-black lg:text-right lg:text-2xl font-bold pt-8 lg:pt-0 lg:mb-4">
            Total: Rs.{data.price}
          </div>

          <div className="mt-4 lg:mt-0  lg:mb-4 text-center">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        <div className="h-full lg:w-3/12 justify-cente ">
          <div className=" justify-center lg:mx-0 mt-10 lg:mt-0 pb-4 lg:pb-0 pl-4 lg:pl-12 lg:pt-6 space-x-6 lg:space-x-0   lg:space-y-6 flex flex-row lg:block ">
            <div>
              <button className="lg:h-[36px] lg:px-0 lg:w-11/12  bg-[#EF8D33]  hover:bg-[#EF8D33] font-semibold text-[#fff] py-1 px-4   rounded-xl">
                Track Package
              </button>
            </div>

            <div>
              <button className="lg:h-[36px] lg:w-11/12 text-black bg-transparent  hover:bg-[#f6f5f5] text-blue-700 font-semibold  py-1 px-4 border border-[#d5d9d9]  rounded-xl">
                Request Cancellation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Order.propTypes = {
  data: PropTypes.object,
};

export default Order;
