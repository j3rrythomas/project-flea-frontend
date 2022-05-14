import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div className="card card-compact col-span-12 md:col-span-6 xl:col-span-4 bg-base-100 shadow-xl max-w-[300px] sm:max-w-[400px] justify-self-center">
      <figure>
        <img
          src="https://api.lorem.space/image/furniture?w=400"
          alt="Fashion Image"
          className="sm:w-[400px]"
        />
      </figure>
      <div className="card-body bg-primaryColor">
        <h2 className="card-title text-black font-semibold">{product.name}</h2>
        <p className="text-black">
          If a dog chews shoes whose shoes does he choose?
        </p>

        <div className="card-actions justify-end">
          {product.tags.map((tag) => (
            <div
              key={tag + product._id}
              className="badge badge-outline text-black"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className="text-lg font-bold text-black">
            ₹+{product.price.toFixed(2)}
          </p>
          <button className="btn bg-primaryColor hover:bg-white hover:text-darkGreen text-black">
            Add to Cart
          </button>
          <button className="btn hover:bg-green bg-darkGreen text-primaryColor">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
