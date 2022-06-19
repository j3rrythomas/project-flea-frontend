const CheckoutItem = () => {
  return (
    <div className="mt-5 bg-[#fff] border-solid flex h-48 rounded-md">
      <div>
        <div className="flex mt-5 ml-10">
          <img
            src="https://i.pinimg.com/474x/22/29/97/2229978df9b298063fce556d227c0392.jpg"
            className="object-cover h-28 w-28 rounded-md"
            alt="image"
          />
        </div>

        <div className="flex justify-center items-center ml-9 mt-4">
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
      <div className="p-4 px-6 text-center whitespace-nowrap text-xl">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl text-[#000]">
            Jimkia Ceramic Plant Container(Aswani White) Hand-Made Product
          </h3>
          <h4 className="text-left w-full text-[#945959]">Ceramic</h4>
          <h4 className="text-left w-full text-[#945959]">Seller:Jimkia</h4>
        </div>
      </div>

      <div className="p-4 px-6 text-center ml-0 whitespace-nowrap">
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
        <div>
          <h4 className="text-left text-2xl mt-20 bottom-0 right-0 w-full text-black">
            $249
          </h4>
        </div>
      </div>
    </div>
  );
};
export default CheckoutItem;
