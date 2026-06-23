import {useState,useRef,useEffect} from "react";

import MessageBubble from "./MessageBubble";

import {askArtMentor}
from "../services/api";



export default function ChatWindow({

messages,

setMessages

}){


const [input,setInput]=useState("");

const bottomRef=useRef();



useEffect(()=>{


bottomRef.current?.scrollIntoView({

behavior:"smooth"

});


},[messages]);





async function sendMessage(){


if(!input.trim())
return;



let question=input;



setMessages(prev=>[

...prev,

{
role:"USER",
text:question
}

]);



setInput("");



let answer=
await askArtMentor(question);



setMessages(prev=>[

...prev,

{
role:"AI",
text:answer
}

]);


}



return(

<div

className="
h-full
flex
flex-col
"

>


{/* MESSAGE AREA */}

<div

className="
flex-1
overflow-y-auto
p-8
space-y-5
"

>


{

messages.map((msg,index)=>(

<MessageBubble

key={index}

role={msg.role}

text={msg.text}

/>

))


}


<div ref={bottomRef}/>


</div>




{/* INPUT */}

<div

className="
p-5
border-t
border-white/20
"

>

<div
className="
flex
gap-3
"

>


<input

value={input}

onChange={(e)=>
setInput(e.target.value)
}

onKeyDown={(e)=>{

if(e.key==="Enter")
sendMessage();

}}

placeholder="
Ask your art question...
"


className="
flex-1
p-4
rounded-2xl
bg-black/30
border
border-white/20
"

 />


<button

onClick={sendMessage}

className="
px-7
rounded-2xl
bg-purple-600
"

>

Send

</button>


</div>

</div>


</div>


)

}