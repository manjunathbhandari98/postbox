const FloatingInput = ({ label, value, onChange, type = "text", id }) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="peer w-full border border-gray-600 bg-transparent text-white rounded-md px-3 pt-5 pb-2.5 focus:outline-none focus:border-blue-500"
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-400 duration-200 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] left-3 bg-[#1f1f1f] px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
