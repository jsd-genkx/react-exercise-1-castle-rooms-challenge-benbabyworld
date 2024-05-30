import { useState } from "react";
const SecretRoom = ({message1, onReply}) => {
  const [reply, setReply] = useState("");
  const handleSendReply = () => {
    onReply(reply)
  }
  
  return <div className="flex flex-col justify-center items-center">
  <h1>Secret Room</h1>
  <p>Message for JSD7: {message1}</p>
 
   
        <input className="h-14 text-black"
          type="text"
          placeholder="Type your reply"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
       />
      <button onClick={handleSendReply} className= " pt-3 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
      type="submit">Submit</button>
</div>;


};

export default SecretRoom;
