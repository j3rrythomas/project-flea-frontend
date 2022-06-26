import React from "react";

const Order = () => {
  return (
    <div className="bg-green mt-12 w-11/12 lg:w-9/12  lg:h-80 mx-auto lg:mx-0 lg:ml-20 shadow-xl">
      <div className="bg-[#E0C7C7] h-1/5 flex flex-row pt-1 hidden lg:flex">
        <div className="flex w-4/6 justify-left gap-32 ml-8">
          <div className="text-center text-black">
            <p>ORDER PLACED</p>
            <p>8June 2022</p>
          </div>

          <div className="text-center text-black">
            <p>SHIP TO</p>
            <p>Trivandrum</p>
          </div>
        </div>
        <div className="w-2/6 flex justify-end mr-12">
          <div className="text-left align-right">
            <div className="flex flex-row gap-2 text-black">
              <p>ORDER</p>
              <p>#406-8182131-5245131</p>
            </div>

            <p className="text-[#2838C1] ">View order details</p>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF] h-fit lg:h-4/5 lg:flex flex-row">
        <div className="h-full lg:w-3/12 items-center lg:pl-4">
          <div className="bg-gray h-[180px]  lg:w-[226px]  my-4   mt-6">
            <img
              src="https://res.cloudinary.com/nithionite/image/upload/v1652549936/tt1vkbj7e88prgztmdmk.jpg"
              className="h-full w-full items-center"
            />
          </div>

          <div className="">
            <p className="pt-2 text-left text-xl font-bold text-black hidden lg:flex">
              Archive Order
            </p>
          </div>
        </div>
        <div className="h-full pt-5 lg:w-6/12 text-black lg:flex flex-col lg:justify-between">
          <div className="text-center lg:text-left">
            <p>
              Fadman Hot Melt Electric Heating Glue Stick Flexible for DIY,
              Sealing and Quick Repairs (Transparent, 11X177mm, 20 Sticks)
            </p>
          </div>

          <div className="text-center text-black lg:text-right lg:text-2xl font-bold pt-8 lg:pt-0 lg:mb-4">
            Total: $299.0
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
              <button className="lg:h-[36px] px-7 lg:px-0 lg:w-11/12 text-black  bg-[#EF8D33]  hover:bg-[#EF8D33]  rounded-3xl font-semibold text-white py-1 px-4   rounded-xl">
                Track Package
              </button>
            </div>

            <div>
              <button className="lg:h-[36px] lg:w-11/12 text-black bg-transparent  hover:bg-[#f6f5f5] text-blue-700 rounded-3xl font-semibold  py-1 px-4 border border-[#d5d9d9]  rounded-xl">
                Request Cancellation
              </button>
            </div>

            <div className="justify-center ">
              <button className="h-[36px] w-11/12 text-black bg-transparent  hover:bg-[#f6f5f5] text-blue-700 rounded-3xl font-semibold  py-1 px-4 border border-[#d5d9d9]  rounded-xl hidden lg:block">
                Leave seller feedback
              </button>
            </div>

            <div>
              <button className="h-[36px] w-11/12 text-black bg-transparent  hover:bg-[#f6f5f5] text-blue-700 rounded-3xl font-semibold  py-1 px-4 border border-[#d5d9d9]  rounded-xl hidden lg:block">
                Write a product review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
