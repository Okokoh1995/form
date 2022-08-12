import React from "react";
import Form from "./component/Form";
import "./style.css";

// import Header from "./Header"
// import Body from "./Body"

function App(props) {
  // const [messages, setMessages] = React.useState(["a", "b"])
  return (
    <div>
      <Form /> 
      {/* {
          messages.length === 0 ?
          <h1>You're all caught up!</h1> :
          <h1>You have {messages.length} unread {messages.length > 1 ?  "messages" : "message"} </h1>
      // } */}
    </div>
    // <main>
    //   <Header user={props.user} />
    //   <Body use={props.user} />
    // </main>
  )
}

 export default App;
