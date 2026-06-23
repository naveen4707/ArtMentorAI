import {useState} from "react";

import Background from "./components/Background";

import Sidebar from "./components/Sidebar";

import ChatWindow from "./components/ChatWindow";


function App(){


const [messages,setMessages]=useState([

{
role:"AI",
text:"Hello artist 🎨 Ask me anything about drawing."
}

]);



return (

<div
className="
h-screen
overflow-hidden
flex
items-center
justify-center
p-5
"
>

<Background/>


<div

className="
w-full
max-w-7xl
h-[90vh]
flex
bg-white/10
backdrop-blur-xl
rounded-3xl
border
border-white/20
overflow-hidden
"

>


<Sidebar/>


<div
className="
flex-1
"
>

<ChatWindow

messages={messages}

setMessages={setMessages}

/>


</div>


</div>


</div>
)


}


export default App;