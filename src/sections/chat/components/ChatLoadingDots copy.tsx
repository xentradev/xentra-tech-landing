import SyncLoader from "react-spinners/SyncLoader";

const ChatLoadingDots = () => {
  return (
    <SyncLoader color={"primary.main"} size={12} speedMultiplier={0.5} />
  )
}

export default ChatLoadingDots;