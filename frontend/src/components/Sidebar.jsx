const categories=[

"🎨 Drawing Basics",

"👤 Portrait",

"✏️ Materials",

"🦴 Anatomy",

"📐 Perspective",

"🌸 Manga Style"

]


export default function Sidebar(){


return(

<div
className="
h-full
w-72
p-6
overflow-y-auto
border-r
border-white/20
"
>


<h1
className="
text-2xl
font-bold
mb-8
"
>

🎨 Art Mentor AI

</h1>


{

categories.map(item=>(

<div

className="
p-3
rounded-xl
hover:bg-white/20
cursor-pointer
mb-2
transition
"

>

{item}

</div>

))

}


</div>


)

}