import PropTypes from "prop-types";

const Alert = ({ alert, type }) => {
  return (
    <div
      className={`alert alert-${type} shadow-lg w-fit h-[40px] absolute top-4 left-1/2 translate-x-[-50%]`}
    >
      <div className="bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6 bg-transparent"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="bg-transparent">{alert}</span>
      </div>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.string,
  alert: PropTypes.string,
};
export default Alert;
