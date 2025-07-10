import RecievedBubble from "./RecievedBubble";
import SentBubble from "./SentBubble";

const MessageList = () => {
  return (
    <div className="w-full m-3 h-[70vh] relative overflow-y-auto scrollbar-hide">
      <SentBubble />
      <RecievedBubble />
    </div>
  );
};

export default MessageList;
