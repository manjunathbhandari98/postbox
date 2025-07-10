import ChatHeader from "./ChatView/ChatHeader";
import MessageInput from "./ChatView/MessageInput";
import MessageList from "./ChatView/MessageList";

const ChatView = ({ chat }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="m-10">
        <ChatHeader selectedChat={chat} />
        <MessageList />
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatView;
