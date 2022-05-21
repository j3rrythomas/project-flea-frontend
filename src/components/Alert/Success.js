import { CheckCircleIcon } from "../../assets/icons";
import PropTypes from "prop-types";

export const Success = ({ text }) => {
  return (
    <div className="rounded-md bg-[#F0FDF4] p-4 shadow-lg w-fit min-h-[40px] absolute top-4 left-1/2 translate-x-[-50%]">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-[#4ADE80] bg-[#F0FDF4]"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3 ">
          <h3 className="text-sm font-medium text-[#166534] ">{text}</h3>
        </div>
      </div>
    </div>
  );
};
Success.propTypes = {
  text: PropTypes.string,
};
