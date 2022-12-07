const Readmore = () => {
  return (
    <div className="w-full mt-4 hover:scale-80 hover:text-cyan-800 text-cyan-600 justify-end flex items-center cursor-pointer">
      <p className="text-base tracking-wide ">Read more</p>
      <svg
        className="ml-3 lg:ml-6"
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={18}
        viewBox="0 0 20 18"
        fill="none"
      >
        <path
          d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
          stroke="#0e7490"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 8.53662H19"
          stroke="#0e7490"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Readmore;
