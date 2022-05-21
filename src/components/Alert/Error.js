import { XCircleIcon } from "../../assets/icons";
import PropTypes from "prop-types";

export const Error = ({ text }) => {
  return (
    <div className="rounded-md bg-[#FEF2F2] p-4 shadow-lg w-fit min-h-[40px] absolute top-4 left-1/2 translate-x-[-50%]">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon
            className="h-5 w-5 text-[#F87171] bg-[#FEF2F2]"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-[#991B1B]">{text}</h3>
        </div>
      </div>
    </div>
  );
};

Error.propTypes = {
  text: PropTypes.string,
};
