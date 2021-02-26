import { useEffect, useState } from "react";
import './App.css';
import database from "./firebase";
import firebase from 'firebase';

function App() {
const [input, setInput] = useState('');//to be blank initial
const [list, setList] = useState([]);//to push the list on to the scrren 
const [username, setUsername] = useState('Guest');


useEffect(() => {
  const name = window.prompt("Enter a username");
  setUsername(name);
}, []);


useEffect (() => {
//this code will run once when the app components mounts

  database
    .collection("messages")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
      setList(
        snapshot.docs.map((doc) => ({
        id:doc.id,
        data: doc.data(),
        }))
      );
    });
}, []);

const sendMessage = (event) => {
  event.preventDefault();//do not refresh on submitting

  const chatmessage={
    name: username,
    message: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp() ,//gives the exact timestamp from the server
  };


  database.collection("messages").add(chatmessage);//adding the message into database

  setInput("");//to set the input box empty after submitting 
};

console.log(input);
  return (
  <div className="app">
    <h1>CHAT</h1>


    {list.map(({ id, data : { message, timestamp ,name} }) =>(
      <h3 key={id} className=" chatmessage">
        {name} : {message}
      </h3>
    ))}

    <form>
    <input value={input} 
    onChange={(event) => setInput(event.target.value)}>
    </input> 

    <button onClick={sendMessage} type='submit'>Send a message</button>
    </form>
    
    
  </div>
   
  );
}

export default App;
