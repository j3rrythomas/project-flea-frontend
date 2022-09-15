import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

const SalesCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <div className="flex-col">
        <p
          className="text-lg font-bold text-cyan cursor-pointer hover:underline"
          onClick={() => navigate(`/products/${data.product_id}`)}
        >
          {data.name.substring(0, 30) + "..."}
        </p>
        <p className="text-md text-black">Quantity:{data.quantity}</p>
      </div>
      <div className="flex-col">
        <p className="text-xl font-bold text-black">Rs.{data.price}</p>
      </div>
    </div>
  );
};

export default SalesCard;

SalesCard.propTypes = {
  data: PropTypes.object,
};
