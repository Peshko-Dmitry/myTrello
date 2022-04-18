import './index.scss'
import ListStyle from './listStyle/ListStyle'
import DeleteList from './deleteList/DeleteList'
import React, {useState} from 'react'

const ListMenu = ({openListMenu, item,list, setList}) => {
    
    const [styleColor, setStyleColor] = useState(false)
    const [deleteList, setDeleteList] = useState(false)

    const openStyleColor = () => {
        openListMenu(item)
        setStyleColor(!styleColor)
    }
    return(
        <>
            <div className={item.menu ? "list-menu block" : "list-menu none"}>
                <span className="title">Действия со списком
                <svg onClick={()=>openListMenu(item)}
                        className="closed" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 320 512">
                        <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                    </svg>
                </span>
                <span onClick={openStyleColor}
                className="change-style">Изменить стиль списка
                
                </span>
                <span onClick={()=>setDeleteList(true)}
                className="delete">Удалить список</span>
            </div>
            <ListStyle 
                openListMenu={openListMenu} 
                item={item}
                setStyleColor={setStyleColor}
                styleColor={styleColor}
                openStyleColor={openStyleColor}
                list={list} 
                setList={setList}
            />
            <DeleteList 
                list={list} 
                setList={setList}
                item={item}
                deleteList={deleteList}
                setDeleteList={setDeleteList}
            />

        </>
    )
}
export default ListMenu