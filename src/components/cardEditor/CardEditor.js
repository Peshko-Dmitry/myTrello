import './index.scss'
import React, {useEffect, useState} from 'react'
import OpenCard from '../openCard/OpenCard'
import DeleteCard from '../deleteCard/DeleteCard'


const CardEditor = ({element, editActive, setList, list, item}) => {
    const [text, setText] = useState(element.task)
    const [openCard, setOpenCard] = useState(false)
    const [deleteCard, setDeleteCard] = useState(false)

    const newTitleCard = (event) => {
            // setText(element.task)
            setText(event.target.value)
    }
    const editCard = () => {
        let newArr = item.tasks
        .map(i => {
            if(i.task === element.task){
                // i.task = event.target.value
                i.task = text
                // console.log(i.task, element.task)
                return i
            } else {
                return i
            }
        })
        editActive(element)
        setOpenCard(false)


    }

    const openCardFn = () => {
        setOpenCard(true)
        element.edit = true
    }
    return(
        <>
        <div className={element.edit ? "card block" : "card none"}>
        <svg onClick={()=>editActive(element)}
                    className="closed" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 320 512">
                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                </svg>
        </div>
        <div className={element.edit ? "card-editor block" : "card-editor none"}>
            <div className="card-editor-details">
                <div className="card-editor-details-labels">
                    {
                        element.labels.map((color, index) => {
                            return(
                                <span key={`editor-${color}`} className="card-editor-details-labels-label" style={{background: color}}></span>
                                )
                        })
                    }

                </div>
                <textarea 
                onChange={(event)=>newTitleCard(event)}
                className="card-editor-details-title" 
                cols="30" 
                rows="10" 

                value={text}>
                </textarea>
            </div>
            <button 
            onClick={editCard}
            className="card-editor-details-save">Сохранить</button>
            <div className="card-editor-buttons">
                <button onClick={openCardFn}
                className="card-editor-buttons-open">Открыть карточку</button>
                
                {/* <button className="card-editor-buttons-edit">Изменить метки</button> */}
                <button 
                    onClick={()=>setDeleteCard(true)}
                className="card-editor-buttons-delete">Удалить карточку</button>
            </div>
            
        </div>
        <DeleteCard 
            deleteCard={deleteCard}
            setDeleteCard={setDeleteCard}
            element={element} 
            item={item} 
            list={list}
            text={text}
            setList={setList}/>
        <OpenCard 
            element={element} 
            item={item} 
            list={list}
            text={text}
            setList={setList}
            openCard={openCard} 
            setOpenCard={setOpenCard} 
            openCardFn={openCardFn} 
            newTitleCard={newTitleCard} 
            editCard={editCard} 
            editActive={editActive}/>
        </>
        
        
    )
}
export default CardEditor