import {React, useEffect, useState } from "react"
import AddCards from '../addCards/AddCards'
import ListMenu from '../listMenu/ListMenu'


const AddList = ()=> {
    const [addListName, setAddListName] = useState(false)
    const [listTitle, setListTitle] = useState([])
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

        if(list.length < 1 && listTitle.length < 1 && !listTitle.includes(tasksList.trim().toLowerCase())){
            const newTaskList = {
                                id: tasksList,
                                title: tasksList,
                                tasks: [],            
                                active: false,
                                menu: false,
                                color: null, 
                                }
        console.log('list.length === 0')
        setList([...list, newTaskList])
        setTasksList('')                    
        }
        else if(list.length >= 1 && !listTitle.includes(tasksList.trim().toLowerCase())){
            const newTaskList = {
                id: tasksList,
                title: tasksList,
                tasks: [],            
                active: false,
                menu: false,
                color: null, 
            }
            console.log('list.length > 1')
            setList([...list, newTaskList])
            setTasksList('')
            
        }
        else if(listTitle.includes(tasksList.trim().toLowerCase())){
            console.log('else')
            alert('?????????? ???????????????? ???????????? ?????? ????????????????????! ???????????????????? ?????????????? ???????????? ????????????????.')
            setTasksList('')
            setList([...list])
            return
        }
        let input = event.target.parentElement.children[0]
        input.value = ''

    }

    const addTask = (element)=> {

        let tasksArr = element.tasks.map(i => i.task.toLowerCase())

        if(task.trim() !== '' && tasksArr.length < 1){

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
        } 
        else if(task.trim() !== '' && tasksArr.length > 0 && !tasksArr.includes(task.toLowerCase())){

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
        }
        else if(tasksArr.includes(task.toLowerCase())){
            alert('?????????? ???????????????? ?????? ????????????????????! ???????????????????? ?????????????? ???????????? ???????????????? ????????????????.')
        }
        else if(task.trim() === '') {
                alert('?????????????? ???????????????? ????????????????!')
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
    const openListMenu = (item) => {
        let newArr = list.map(i => {
            if(i.id === item.id){
                i.menu = !i.menu
                return i
            } else {
                return i
            }
        })
        setList(newArr)

    }
  
    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(list))
        setListTitle(list.map(i =>i.title.toLowerCase()))
        
    },[list, task])
  
    return(
        <>
        {
            list.map((item, index)=>{
                return(
                <div className="list-add" key={index} >
                    <div className="list-add-nav" style={{background: item.color}}>
                        <input onChange={(event) => editListName(event, item)} style={{background: 'white'}}
                            type="text" 
                            placeholder="???????????? ?????????????????? ????????????"
                            maxLength='512' 
                            autoComplete='off'
                            value={item.title}/>
                            <svg 
                            onClick={()=> openListMenu(item)}
                            className="nav-action"
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 448 512">
                            <path d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"/>
                            </svg>
                            <ListMenu openListMenu={openListMenu} item={item} list={list} setList={setList}/>
                    </div>
                    <div className="list-add-cards" style={{background: item.color}}>
                        <AddCards item={item} setList={setList} list={list}/>
                            
                        <textarea className={item.active ? 'list-add-cards-title block' : 'list-add-cards-title none' } onChange={taskName} cols="30" rows="10"  placeholder={'???????????? ?????????????????? ?????? ???????? ????????????????' }></textarea>
                        <button onClick={() => activeStyle(item)}   className={item.active ? "button-active none" :"button-active block"}>+ ???????????????? ????????????????</button>
                            
                            <button className={item.active ? 'button-not-active block' : 'button-not-active none' } onClick={(event) => addtaskClick(item, event)}>???????????????? ????????????????</button>
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
                <input onChange={listName} type="text" placeholder="???????????? ?????????????????? ????????????" maxLength='512' autoComplete='off'/>
                <button onClick={(event)=>addListLocal(event)}>???????????????? ????????????</button>
                <svg onClick={()=> setAddListName(!addListName)}
                    className="close" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 320 512">
                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                </svg>
    
            </div>
            <div className="list-button">
                <button className={addListName ? "btn none" : "btn block"} onClick={()=> setAddListName(!addListName)}>
                ???????????????? ????????????  +
                </button>
            </div>
            </>
    )
}

export default AddList;