import {
  JewelryCardImg,
  FleaMarketImg,
  BookCardImg,
  AntiqueCardImg,
  UtensilsCardImg,
} from "../../assets/images";
import { useNavigate } from "react-router-dom";

const HomeProducts = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[80%] grid grid-cols-12 mt-20 mb-10">
      <div className="col-span-12 mx-10 card bg-base-100 shadow-xl image-full h-[800px] brightness-125">
        <figure className="h-[800px]">
          <img src={FleaMarketImg} alt="Flea Market Card" width="100%" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-[#fff]">Browse All</h2>
          <p className="text-xl text-[#fff]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            repellendus?
          </p>
          <div className="card-actions justify-center h-full items-center">
            <button
              className=" bg-transparent text-[#c2881f] hover:scale-125 cursor-pointer transition-all duration-[400ms] ease-in-out text-5xl md:text-7xl"
              onClick={() => navigate("/products")}
            >
              Enter the world of Flea
            </button>
          </div>
        </div>
      </div>
      <div
        className="col-span-12 lg:col-span-4 m-10 card bg-base-100 shadow-xl image-full h-[800px]  hover:scale-105 cursor-pointer transition-all duration-[400ms] ease-in-out"
        onClick={() => navigate("/products", { state: { category: "Books" } })}
      >
        <figure className="h-[800px]">
          <img src={BookCardImg} alt="Book Card" width="100%" />
        </figure>
        <div className="card-body flex justify-center items-center text-center">
          <div className="flex flex-col items-center">
            <h1 className="card-title text-5xl  text-[#fff] mb-4">Books</h1>
            <p className="text-2xl text-[#fff]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              repellendus?
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-span-12 lg:col-span-4 m-10 card bg-base-100 shadow-xl image-full h-[800px] hover:scale-105 cursor-pointer transition-all duration-[400ms] ease-in-out"
        onClick={() =>
          navigate("/products", { state: { category: "Antiques" } })
        }
      >
        <figure className="h-[800px]">
          <img src={AntiqueCardImg} alt="Antique Card" width="100%" />
        </figure>
        <div className="card-body flex justify-center items-center text-center">
          <div className="flex flex-col items-center">
            <h1 className="card-title text-5xl  text-[#fff] mb-4">Antiques</h1>
            <p className="text-2xl text-[#fff]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              repellendus?
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-span-12 lg:col-span-4 m-10 card bg-base-100 shadow-xl image-full h-[800px] hover:scale-105 cursor-pointer transition-all duration-[400ms] ease-in-out"
        onClick={() =>
          navigate("/products", { state: { category: "Utensils" } })
        }
      >
        <figure className="h-[800px]">
          <img src={UtensilsCardImg} alt="Utensils Card" width="100%" />
        </figure>
        <div className="card-body flex justify-center items-center text-center">
          <div className="flex flex-col items-center">
            <h1 className="card-title text-5xl  text-[#fff] mb-4">Utensils</h1>
            <p className="text-2xl text-[#fff]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              repellendus?
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-span-12 mx-10 card bg-base-100 shadow-xl image-full h-[800px] hover:scale-105 cursor-pointer transition-all duration-[400ms] ease-in-out"
        onClick={() =>
          navigate("/products", { state: { category: "Jewellery" } })
        }
      >
        <figure className="h-[800px]">
          <img src={JewelryCardImg} alt="Jewelry Card" width="100%" />
        </figure>
        <div className="card-body flex justify-center items-center text-center">
          <div className="flex flex-col items-center">
            <h1 className="card-title text-5xl md:text-7xl  text-[#fff] mb-4">
              Jewelry
            </h1>
            <p className="text-2xl text-[#fff]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              repellendus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
