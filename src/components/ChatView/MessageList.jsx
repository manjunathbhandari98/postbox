import BubbleAnimation from "./BubbleAnimation";
import RecievedBubble from "./RecievedBubble";
import SentBubble from "./SentBubble";

const MessageList = ({ messages }) => {
  return (
    <div className="w-full sm:px-4 py-2 h-[70vh] mt-4 overflow-y-auto flex flex-col gap-2 scrollbar-hide">
      {messages.map((msg) =>
        msg.sender === "me" ? (
          <SentBubble key={msg.id} message={msg} />
        ) : (
          <RecievedBubble key={msg.id} message={msg} />
        )
      )}{" "}
      <BubbleAnimation />
    </div>
  );
};

export default MessageList;
