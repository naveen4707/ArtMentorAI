import {motion} from "framer-motion";


export default function MessageBubble({

role,

text

}){


const user =
role==="USER";



return(

<motion.div

initial={{

opacity:0,

y:20

}}

animate={{

opacity:1,

y:0

}}

className={

`
flex
${user ? "justify-end":"justify-start"}

`

}

>


<div

className={

`
max-w-xl
p-5
rounded-3xl

${user

?

"bg-blue-600/40"

:

"bg-purple-600/40"

}

`

}

>


<h4

className="
text-sm
font-bold
mb-2
"

>

{user?"You":"🎨 Art Mentor"}

</h4>


<p>

{text}

</p>


</div>


</motion.div>


)

}