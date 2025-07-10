const BubbleAnimation = () => {
  return (
    <div className="flex items-center">
      <img
        src="/other-dp.jpg"
        alt="Other"
        className="w-8 h-8 rounded-full object-cover border-2 border-white mr-2"
      />
      <div className=" px-4 py-2 rounded-r-xl rounded-bl-xl inline-flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0s]"></span>
        <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce [animation-delay:0.15s]"></span>
        <span className="w-2 h-2 rounded-full bg-pink-500 animate-bounce [animation-delay:0.3s]"></span>
      </div>
    </div>
  );
};

export default BubbleAnimation;
