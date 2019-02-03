import React from "react"

const userItem = props => {
    return <li>
        {props.data.name}
        <ul>
            {props.data.todos.map(todo => (
                <li>{todo.title}</li>
            ))}
        </ul>
    </li>
}

export default userItem