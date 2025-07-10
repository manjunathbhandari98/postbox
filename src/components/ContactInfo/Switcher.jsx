const Switcher = ({ isChecked, onChange }) => {
  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="sr-only"
        />
        <div className="block h-6 w-10 rounded-full bg-[#1f1f1f] border border-gray-700"></div>
        <div
          className={`dot absolute top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition-all duration-300 ${
            isChecked ? "translate-x-5" : "translate-x-1"
          }`}
        >
          <span
            className={`h-3 w-3 rounded-full ${
              isChecked ? "bg-primary" : "bg-white"
            }`}
          ></span>
        </div>
      </div>
    </label>
  );
};

export default Switcher;
