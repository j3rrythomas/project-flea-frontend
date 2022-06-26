import PropTypes from "prop-types";

const CheckoutItem = ({ itemInfo }) => {
  return (
    <div className="mt-5 bg-[#fff] border-solid flex h-48 rounded-md">
      <div className="w-1/5">
        <div className="flex justify-center items-center h-4/5">
          <img
            src="https://i.pinimg.com/474x/22/29/97/2229978df9b298063fce556d227c0392.jpg"
            className="object-cover h-28 w-28 rounded-md ml-8 lg:ml-0"
            alt="image"
          />
        </div>

        <div className="flex justify-center items-center h-1/5 ml-8 lg:ml-0">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-flex w-6 h-6 text-red-600 bg-[#fff]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <input
            type="text"
            name="qty"
            value="2"
            className="w-12 text-center text-black text-2xl outline-none"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-flex w-6 h-6 text-green-600 bg-[#fff]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 px-6 text-center whitespace-nowrap text-xl w-3/5">
        <div className="flex flex-col items-center justify-evenly font-bold h-3/4 ">
          <h3 className="text-2xl text-left w-full text-[#000]">
            {itemInfo.name}
          </h3>
          <div className="flex w-full">
            {itemInfo.categories.map((category, index) => (
              <h4
                className="text-left text-[#945959] mr-2"
                key={category + index}
              >
                {category}
              </h4>
            ))}
          </div>
          <h4 className="text-left w-full text-[#945959]">Seller:Jimkia</h4>
          <h4 className="lg:hidden text-left text-2xl w-full text-black ">
            $249
          </h4>
        </div>
      </div>

      <div className="p-4 px-6 text-right whitespace-nowrap w-1/5">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-red-400 bg-[#fff]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
        <div className="hidden lg:block">
          <h4 className="text-center lg:text-right text-2xl mt-20 w-full text-black ">
            $249
          </h4>
        </div>
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  itemInfo: PropTypes.object,
};
export default CheckoutItem;
