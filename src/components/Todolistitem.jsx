import DelitemtIcon from "./Icons/Delitemicon";
import EditIcon from "./Icons/EditIcon";

export default function Todolistitem({todo}){
    return(
        <li className="relative flex items-center justify-between px-2 py-6 border-b">
        <div>
            <input type="checkbox" checked={todo?.status} onChange={()=>{}} className="" />
            <p  className={`inline-block mt-1 ml-2 text-gray-600 ${todo?.status ? 'line-through' : ''}`}>{ todo?.title }</p>
        </div>
        <button type="button" className="absolute right-0 flex items-center space-x-1">
            <EditIcon />
            <DelitemtIcon/>
           
        </button>
        </li>
    )
}