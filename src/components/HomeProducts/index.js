import JewelryCardImg from "../../assets/images/jewelry.jpg";
import { useNavigate } from "react-router-dom";

const HomeProducts = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[80%] grid grid-cols-12 mt-20 mb-10">
      <div className="col-span-12 mx-10 card bg-base-100 shadow-xl image-full h-[800px]">
        <figure className="h-[800px]">
          <img src={JewelryCardImg} alt="Jewelry Card" width="100%" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-[#fff]">Jewelry</h2>
          <p className="text-xl text-[#fff]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            repellendus?
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-lg bg-primaryColor hover:bg-black hover:text-primaryColor text-black"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
