const Error = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-black">
        Error accessing this page.
      </h1>
      <h2 className="text-xl text-black">
        The page you are searching for either does not exist or you do not have
        sufficient permissions to view it.
      </h2>
    </div>
  );
};

export default Error;
