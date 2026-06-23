import { motion } from "framer-motion";


export default function Background(){

return (

<div
className="
fixed
inset-0
-z-10
overflow-hidden
"
>


<img

src="/src/assets/manga-bg.jpg"

className="
absolute
w-full
h-full
object-cover
opacity-30
"

/>


<motion.div

animate={{

scale:[1,1.2,1],

opacity:[0.2,0.4,0.2]

}}

transition={{

duration:8,

repeat:Infinity

}}

className="
absolute
w-96
h-96
bg-purple-500
rounded-full
blur-3xl
"

/>


</div>

)

}