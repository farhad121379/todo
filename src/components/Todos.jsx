import { useState } from "react";
import TOdoList from "./TodoList";
export default function Todos(){
          const[todos,setTodos] = useState([
               { 


            title :'go to school ',
             status:true

            } ,
       {
        title :'go to gym ',
        status :false
         }



          ]);
          const onInputNewTodoChengesHandler =(event) => {
           // console.log(event);
             }

             const aadNewTodo=(event)=> {
                if(event.key== 'Enter') {
                  console.log('add new todo');
                  settodos([
                    ...todos,
                    {
                           title :event.target.value,
                           status : false
                    }

                  ])

                  event.target.value=''; 

                }
                console.log();
             }
            

    return (
        <div className="flex items-center justify-center h-screen">
        <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
            <div className="flex items-center mb-6">
                <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
            </div>
            <div className="relative">
                <input type="text" placeholder="What needs to be done today?"
                onChange={onInputNewTodoChengesHandler}
                onKeyDown={aadNewTodo}
                className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
            </div>
        < TOdoList todos={todos} />
        </div>
    </div>
    )
}