import {React, useEffect, useState } from "react"
import AddCards from '../addCards/AddCards'


const AddList = ()=> {
    const [addListName, setAddListName] = useState(false)
    const [tasksList, setTasksList] = useState('')
    const [task, setTask] = useState('')
    const [list, setList] = useState(

        JSON.parse(localStorage.getItem('list')) || []
        
    )
    const listName  = (e) => {
        setTasksList(e.target.value)

    }
    const taskName =(e) => {
        setTask(e.target.value)
    }
    const resetValue = (event) => {
        let textarea = event.target.parentElement.children[1]
        textarea.value = ''
    }
    const addtaskClick = (element, event) => {
        addTask(element) 
        resetValue(event)
    }

    const addListLocal =(event) =>{
        if(tasksList.trim() !== ''){
            const newTaskList = {
                id: tasksList,
                title: tasksList,
                tasks: [],            
                active: false,
                color: null, 
            }
            setList([...list, newTaskList])
            setTasksList('')
        } else {
            alert('Please enter the name of the task list')
        }
        let input = event.target.parentElement.children[0]
        input.value = ''

    }

    const addTask = (element)=> {
        if(task.trim() !== ''){
            const newTask = {
                task: task,
                edit: false,
                labels: [],
                description: ''
            }
            let newArr = list.map(i => {
                if(i.id === element.id){
                    i.tasks.push(newTask)
                    return i
                } else {
                    return i
                }
            })
            setList(newArr)
        } else {
                alert('введите задачу')
            }
    }

    const activeStyle = (element) => {
        let newArr = list.map(i => {
            if(i.id === element.id){
                i.active = !i.active
                return i
            } else {
                return i
            }
        })
        setList(newArr)
    }
    const editListName = (event, item) => {
        let inputValue = event.target.value
        let newArr = list.map(i => {
            if(i.id === item.id){
                i.title = inputValue
                i.id = inputValue
                return i
            } else {
                return i
            }
        })
        setList(newArr)
    }

    useEffect(()=>{
        console.log('создан новый список задач')
        localStorage.setItem('list', JSON.stringify(list))
    },[list, task])
  
    return(
        <>
        {
            list.map((item, index)=>{
                return(
                <div className="list-add" key={index}>
                    <div className="list-add-nav">
                        <input onChange={(event) => editListName(event, item)} type="text" placeholder="Ввести заголовок списка" maxLength='512' autoComplete='off' defaultValue={item.title}/>
                            <svg className="nav-action"
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 448 512">
                            <path d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"/>
                            </svg>
                    </div>
                    <div className="list-add-cards">
                        <AddCards item={item} setList={setList} list={list}/>
                            {/* not activ */}
                        <textarea className={item.active ? 'list-add-cards-title block' : 'list-add-cards-title none' } onChange={taskName} cols="30" rows="10"  placeholder={'Ввести заголовок для этой карточки' }></textarea>
                        <button onClick={() => activeStyle(item)}   className={item.active ? "button-active none" :"button-active block"}>+ Добавить карточку</button>
                            {/* active */}
                            <button className={item.active ? 'button-not-active block' : 'button-not-active none' } onClick={(event) => addtaskClick(item, event)}>Добавить карточку</button>
                            <svg className={item.active ? 'closed-cards block' : 'closed-cards none' }
                                onClick={() => activeStyle(item)}
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 320 512">
                                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                            </svg>
    
                    </div>
    
    
                </div>
                )
            })
        }

                <div className={addListName ? "list-name block" : "list-name none"}  >
                <input onChange={listName} type="text" placeholder="Ввести заголовок списка" maxLength='512' autoComplete='off'/>
                <button onClick={(event)=>addListLocal(event)}>Добавить список</button>
                <svg onClick={()=> setAddListName(!addListName)}
                    className="close" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 320 512">
                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                </svg>
    
            </div>
            <div className="list-button">
                <button className={addListName ? "btn none" : "btn block"} onClick={()=> setAddListName(!addListName)}>
                Добавить список  +
                </button>
            </div>
            </>
    )
}

export default AddList;