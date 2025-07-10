const SentBubble = () => {
  return (
    <div className="flex gap-2 items-end absolute right-0 bottom-0 max-w-1/3">
      <div className="bg-gray-200/20 flex flex-col gap-1 p-3 rounded-l-xl rounded-t-xl relative text-sm text-white">
        <span>Sent message here...</span>

        <div className="text-blue-500 text-[10px] flex justify-end">
          <span>Delevered</span>
        </div>
      </div>
      <img
        src="/dp.jpg"
        alt="Profile"
        className="w-8 h-8 rounded-full object-cover border-2 border-white"
      />
    </div>
  );
};

export default SentBubble;
