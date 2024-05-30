import Room from "./04_Room";
const Chamber = ({message1, onReply}) => {
  return <div className="flex flex-col justify-center items-center">
    <h1>Chamber</h1>
    <p>Message for JSD7: {message1}</p>
    <Room message1={message1} onReply={onReply} />
  </div>;
};
export default Chamber;
