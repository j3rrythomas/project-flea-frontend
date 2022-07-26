import {
  JewelryCardImg,
  FleaMarketImg,
  BookCardImg,
  AntiqueCardImg,
  UtensilsCardImg,
  HandicraftsImg,
  ApparelImg,
  PaintingsImg,
} from "../../assets/images";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

const HomeProducts = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full min-h-[80%] grid grid-cols-12 mt-20 mb-10">
        <div className="col-span-12 mx-10 card bg-base-100 shadow-xl image-full h-[800px] brightness-125">
          <figure className="h-[800px]">
            <img src={FleaMarketImg} alt="Flea Market Card" width="100%" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl text-[#fff]">Browse All</h2>
            <p className="text-xl text-[#fff]">
              The complete hub where all exotic goods come under one shelter.
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
          className="col-span-12 md:col-span-6 xl:col-span-4 m-10 card bg-base-100 shadow-xl image-full h-[800px]  hover:scale-105 cursor-pointer transition-all duration-[400ms] ease-in-out"
          onClick={() =>
            navigate("/products", { state: { category: "Books" } })
          }
        >
          <figure className="h-[800px]">
            <img src={BookCardImg} alt="Book Card" width="100%" />
          </figure>
          <div className="card-body flex justify-center items-center text-center">
            <div className="flex flex-col items-center">
              <h1 className="card-title text-5xl  text-[#fff] mb-4">Books</h1>
              <p className="text-2xl text-[#fff]">
                Come experience the rustic touch and feel of books,both classics
                and modern.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 md:col-span-6 xl:col-span-4 m-10 card bg-base-100 shadow-xl image-full h-[800px] hover:scale-105 cursor-pointer transition-all duration-[400ms] ease-in-out"
          onClick={() =>
            navigate("/products", { state: { category: "Antiques" } })
          }
        >
          <figure className="h-[800px]">
            <img src={AntiqueCardImg} alt="Antique Card" width="100%" />
          </figure>
          <div className="card-body flex justify-center items-center text-center">
            <div className="flex flex-col items-center">
              <h1 className="card-title text-5xl  text-[#fff] mb-4">
                Antiques
              </h1>
              <p className="text-2xl text-[#fff]">
                Experience the stories of old in the modern era.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 md:col-span-6 xl:col-span-4 m-10 card bg-base-100 shadow-xl image-full h-[800px] hover:scale-105 cursor-pointer transition-all duration-[400ms] ease-in-out"
          onClick={() =>
            navigate("/products", { state: { category: "Crockery" } })
          }
        >
          <figure className="h-[800px]">
            <img src={UtensilsCardImg} alt="Utensils Card" width="100%" />
          </figure>
          <div className="card-body flex justify-center items-center text-center">
            <div className="flex flex-col items-center">
              <h1 className="card-title text-5xl  text-[#fff] mb-4">
                Crockery
              </h1>
              <p className="text-2xl text-[#fff]">
                The crockery your food deserves.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 mx-10 card bg-base-100 shadow-xl image-full h-[800px] hover:scale-105 cursor-pointer transition-all duration-[400ms] ease-in-out"
          onClick={() =>
            navigate("/products", { state: { category: "Handicrafts" } })
          }
        >
          <figure className="h-[800px]">
            <img src={HandicraftsImg} alt="Jewelry Card" width="100%" />
          </figure>
          <div className="card-body flex justify-center items-center text-center">
            <div className="flex flex-col items-center w-full">
              <h1 className="card-title text-5xl md:text-7xl  text-[#fff] mb-4">
                Handicrafts
              </h1>
              <div className="flex-col md:flex w-full justify-around md:mt-10 items-end">
                <p
                  className="text-3xl text-[#c2881f] mt-5"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/products", { state: { category: "Textiles" } });
                  }}
                >
                  Textiles
                </p>
                <p
                  className="text-3xl text-[#c2881f] mt-5"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/products", {
                      state: { category: "Wood Crafts" },
                    });
                  }}
                >
                  Wood Crafts
                </p>
                <p
                  className="text-3xl text-[#c2881f] mt-5"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/products", {
                      state: { category: "Paper Crafts" },
                    });
                  }}
                >
                  Paper Crafts
                </p>
                <p
                  className="text-3xl text-[#c2881f] mt-5"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/products", { state: { category: "Pottery" } });
                  }}
                >
                  Pottery
                </p>
                <p
                  className="text-3xl text-[#c2881f] mt-5"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/products", {
                      state: { category: "Digital" },
                    });
                  }}
                >
                  Digital
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 md:col-span-6 xl:col-span-4 m-10 card bg-base-100 shadow-xl image-full h-[800px] hover:scale-105 cursor-pointer transition-all duration-[400ms] ease-in-out"
          onClick={() =>
            navigate("/products", { state: { category: "Ornaments" } })
          }
        >
          <figure className="h-[800px]">
            <img src={JewelryCardImg} alt="Jewelry Card" width="100%" />
          </figure>
          <div className="card-body flex justify-center items-center text-center">
            <div className="flex flex-col items-center">
              <h1 className="card-title text-5xl md:text-7xl  text-[#fff] mb-4">
                Ornaments
              </h1>
              <p className="text-2xl text-[#fff]">
                Discover the world of decorative ideas with the most elegant
                patterns and designs.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 md:col-span-6 xl:col-span-4 m-10 card bg-base-100 shadow-xl image-full h-[800px] hover:scale-105 cursor-pointer transition-all duration-[400ms] ease-in-out"
          onClick={() =>
            navigate("/products", { state: { category: "Apparel" } })
          }
        >
          <figure className="h-[800px]">
            <img src={ApparelImg} alt="Jewelry Card" width="100%" />
          </figure>
          <div className="card-body flex justify-center items-center text-center">
            <div className="flex flex-col items-center">
              <h1 className="card-title text-5xl md:text-7xl  text-[#fff] mb-4">
                Apparel
              </h1>
              <p className="text-2xl text-[#fff]">
                Fashion is the armor to survive the reality of everyday life.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 md:col-span-6 xl:col-span-4 m-10 card bg-base-100 shadow-xl image-full h-[800px] hover:scale-105 cursor-pointer transition-all duration-[400ms] ease-in-out"
          onClick={() =>
            navigate("/products", { state: { category: "Paintings" } })
          }
        >
          <figure className="h-[800px]">
            <img src={PaintingsImg} alt="Jewelry Card" width="100%" />
          </figure>
          <div className="card-body flex justify-center items-center text-center">
            <div className="flex flex-col items-center">
              <h1 className="card-title text-5xl md:text-7xl  text-[#fff] mb-4">
                Paintings
              </h1>
              <p className="text-2xl text-[#fff]">
                Every canvas is a journey all its own, come own one.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomeProducts;
