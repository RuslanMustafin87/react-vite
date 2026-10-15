import { useState } from "react"

const arr = [
    {name: 'petr',age: 23},
    {name: 'leha', age: 67},
    {name: 'iou', age: 89},
    {name: 'ildar',age: 10},
    {name: 'ruslan', age: 11}
]

export function Sort() {
    let [sortByAge, setSortByAge] = useState([]) 

    function sorting(age) {
        setSortByAge(() => arr.filter(item => item.age > age))
    }

    return (
        <>
            <input  type="text" id='age' onChange={(e) => sorting(e.target.value)} />
            <ul>
                {sortByAge.map(
                    (e) => <li>{e.name}</li>
                )}
            </ul>
        </>
    )
}

