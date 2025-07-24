import React from 'react'

function List({ list }) {
    return (
        <ul>
            {list.map((list, index) => (
                <li key={index}>
                    <p>{list}</p>
                </li>
            ))}
        </ul>
    );
}

export default List;