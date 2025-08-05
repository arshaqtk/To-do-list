import React, { useRef } from 'react'
import { useState } from 'react'
import './Todo.css'
import "tailwindcss";
import TrashIcon from '../../../public/TrashIcon';


function TodoList() {


    const [task, SetTask] = useState([])
    const [newtask, SetnewTask] = useState("")




    function handleinput(event) {
        SetnewTask(event.target.value)
        console.log(newtask)
    }

    function handlecheck(index) {
        const updatedTask = task.map((item, i) => index == i ? { ...item, completed: !item.completed } : item)
        SetTask(updatedTask)
    }

    function addtask() {
        if (newtask == "") {
            alert("Enter an value")
        } else {
            let Addtask = [...task, { text: newtask, completed: false }]
            SetTask(Addtask)
            SetnewTask("")
        }

        console.log(task)
    }

    function deletetask(id) {
        let res = task.filter((task, index) => index != id)
        console.log(res)
        SetTask(res)
    }




    let tasks = task.map((task, index) => <li key={index} className={`h-[50px] bg-[#91bab7]  px-4 mb-3 text-center font-bold rounded-4xl flex justify-between items-center w-[400px] ${task.completed ? "line-through" : ""}`}>{index + 1}. {task.text}
        <div className='flex justify-center items-center'>
            <input type="checkbox" name="to-do" id="to-do" className='w-4 h-4  mr-2 cursor-pointer ' onChange={() => handlecheck(index)} />
            <button onClick={() => deletetask(index)} className='p-1 cursor-pointer rounded-full bg-red-500 hover:bg-red-600 text-white'> <TrashIcon /></button><br />
        </div></li>)




    return (
        <div className='flex items-center justify-center h-[100vh] bg-[linear-gradient(90deg,_rgba(120,185,181,1)_0%,_rgba(15,130,140,1)_44%,_rgba(6,80,132,1)_100%)]'>
            <div className=' h-[450px] w-[550px]  bg-[#cae1e3] rounded-md overflow-auto shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] p-4 li-shadow'>
                <div>
                    <h1 className='text-[#58466f] text-center font-bold text-2xl mt-8'>ENTER YOUR TASKS TO-DO</h1></div>
                <div className='mt-[50px] flex justify-center'>
                    <div>

                        <input value={newtask} type="text" placeholder='Enter The Task' onChange={handleinput} className='border-solid border-2 h-[50px] w-[300px] bg-white rounded-lg mb-5 font-medium text-center' />
                        <button onClick={addtask} className='border-1 bg-[#065084] rounded-xl p-2 h-[50px] w-[80px] ml-2 text-white'>ADD</button><br />
                        <div>
                            <ol>{tasks}</ol>
                        </div>
                    </div>



                </div>

            </div>


        </div>
    )
}

export default TodoList