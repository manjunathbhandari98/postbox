import { messages } from "./../data/messages";
import ChatHeader from "./ChatView/ChatHeader";
import MessageInput from "./ChatView/MessageInput";
import MessageList from "./ChatView/MessageList";

const ChatView = ({ chat }) => {
  return (
    <div className="flex flex-colsm:gap-1 md:gap-4">
      <div className="sm:m-2 md:m-10 m-2">
        <ChatHeader selectedChat={chat} />
        <MessageList messages={messages} />
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatView;
