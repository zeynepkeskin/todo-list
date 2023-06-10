import { useState } from "react"
import { FaTrash } from 'react-icons/fa';

export default function TodoList() {

    var [list, setList] = useState([{
                            title: 'cat stretch',
                            done: false
                        },
                        {
                            title: 'react app',
                            done: true
                        }]);
    var [newItem, setNewItem] = useState("");


    function toggle(index) {
        list[index].done = !list[index].done;
        setList(list.map(i => i));
    }

    function textChanged(event) {
        setNewItem(event.target.value)
    }

    function add(){
        if(newItem == ""){
            return;
        }
        var newList = [...list, {title: newItem, done: false}];
        setList(newList)
        setNewItem("")
    }

    function remove(index) {
        setList(list.filter((e,i) => i != index))
    }

    let newList = () => {
        setList([{title:'bogelek'}])
    }

    return (
        <>
        <ul>
            {list.map((i, index) => <li
                className={i.done ? "done" : ""}
                key={index}
                >
               <span onClick={() => toggle(index)}>{i.title}</span> 
               <FaTrash onClick={() => remove(index)}/>
            </li>)}
            <li>
                <input placeholder="write your todo" type="text" value={newItem} onChange={textChanged} />
                <button onClick={add}>add</button>
            </li>
        </ul>
        <button onClick={newList}>New list</button>
        </>
    )

}
