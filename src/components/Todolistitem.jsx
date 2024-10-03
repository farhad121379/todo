import DelitemtIcon from "./Icons/Delitemicon";
import EditIcon from "./Icons/EditIcon";

export default function Todolistitem({todos}){
    return(
        <li className="relative flex items-center justify-between px-2 py-6 border-b">
        <div>
            <input type="checkbox" checked={todos?.status} onChange={()=>{}} className="" />
            <p  className={`inline-block mt-1 ml-2 text-gray-600 ${todos?.status ? 'line-through' : ''}`}>{ todos?.title }</p>
        </div>
        <button type="button" className="absolute right-0 flex items-center space-x-1">
            <EditIcon />
            <DelitemtIcon/>
           
        </button>
        </li>
    )
}