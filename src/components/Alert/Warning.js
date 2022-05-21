import { ExclamationCircleIcon } from "../../assets/icons";
import PropTypes from "prop-types";

export const Warning = ({ text }) => {
  return (
    <div className="rounded-md bg-[#FEFCE8] p-4 shadow-lg w-fit min-h-[40px] absolute top-4 left-1/2 translate-x-[-50%]">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationCircleIcon
            className="h-5 w-5 text-[#FACC15] bg-[#FEFCE8]"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-[#854D0E]">{text} </h3>
        </div>
      </div>
    </div>
  );
};

Warning.propTypes = {
  text: PropTypes.string,
};
