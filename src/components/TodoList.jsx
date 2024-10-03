import Todolistitem from "./Todolistitem";

export default function TodoList({ todos }) {

    console.log(todos);
    return (
        <ul className="list-reset">
            {
                todos.map((t, index) => <Todolistitem key={index} todo={t} />)
            }
        </ul>
    )
}