import React from "react";
import ReactDOM from 'react-dom';
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
const App = (props) => {
  return (
   <div> 
  <HomePage />
  </div>

);
};

const appDiv = document.getElementById("app");
ReactDOM.render(<App name="vasilakis" />, appDiv);
export default App;