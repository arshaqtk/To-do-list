import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import './Todo.css'
import "tailwindcss";
import TrashIcon from '../../../public/TrashIcon';


function TodoList() {


    const [task, SetTask] = useState(() => {
        const storedTasks = localStorage.getItem('task');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    const [newtask, SetnewTask] = useState("")



    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(task));
    }, [task]);




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




    let tasks = task.map((task, index) => <li key={index} className={`md:h-[50px] h-[40px] bg-[#91bab7]  px-4 mb-3 text-center md:font-bold font-medium rounded-4xl flex justify-between items-center md:w-[400px] w-[300px] ${task.completed ? "line-through" : ""}`}>{index + 1}. {task.text}
        <div className='flex justify-center items-center'>
            <input type="checkbox" name="to-do" id="to-do" className='w-4 h-4  mr-2 cursor-pointer ' onChange={() => handlecheck(index)} />
            <button onClick={() => deletetask(index)} className='p-1 cursor-pointer rounded-full bg-red-500 hover:bg-red-600 text-white'> <TrashIcon /></button><br />
        </div></li>)




    return (
        <div className='flex items-center justify-center h-[100vh] bg'>
            <div className=' md:h-[450px] h-[500px] w-[400px] md:w-[550px]  bg-[#cae1e3] rounded-md overflow-auto shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] p-4 li-shadow'>
                <div>
                    <h1 className='text-[#58466f] text-center font-bold text-2xl mt-8'>ENTER YOUR TASKS TO-DO</h1></div>
                <div className='mt-[50px] flex justify-center'>
                    <div>

                        <input value={newtask} type="text" placeholder='Enter The Task' onChange={handleinput} className='border-solid border-2 h-[50px] md:w-[300px] w-[250px]  bg-white rounded-lg mb-5 font-medium text-center' />
                        <button onClick={addtask} className='border-1 bg-[#065084] rounded-xl p-2 h-[50px] md:w-[80px] w-[60px] ml-2 text-white'>ADD</button><br />
                        <div>
                            <ol>{tasks}</ol>
                        </div>
                        <div className={`flex justify-center align-center ${task.length>0?"block":"hidden"}`}>
                            <button className='md:h-[40px] h-[30px] bg-[#ed0a0a]  px-8 mb-3 text-center font-bold rounded-4xl flex justify-between items-center  text-white' onClick={() =>SetTask([] )}>CLEAR</button>
                        </div>
                    </div>



                </div>

            </div>


        </div>
    )
}

export default TodoList