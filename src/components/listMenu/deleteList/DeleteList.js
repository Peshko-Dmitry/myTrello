import './index.scss'
import React from 'react'

const DeleteList = ({list, setList, item, deleteList, setDeleteList}) => {
    console.log(item)
    const deleteListFn = () => {

        setList(list.filter(i => i.title !== item.title))
        
        setDeleteList(false)
    }
    return(
        <>
        <div className={deleteList ? "delete-list-background" : "delete-card-background none"}></div>
        <div className={deleteList ? "delete-list-window" : "delete-card-window none"}>
            <p>Вы действительно хотите удалить список: <strong>{item.title}</strong>?</p>
            <button onClick={deleteListFn}>ДА</button>
            <button onClick={()=>setDeleteList(false)}>НЕТ</button>
        </div>
        </>
    )
}
export default DeleteList