import {React, useState} from 'react'
import AddList from '../addList/AddList'

const List = () => {
    // const [listName, setListName] = useState(false)


    return(
    <div className="list">
        <AddList />
        {/* <div className="list-button">
        <button className={listName ? "btn none" : "btn block"} onClick={()=> setListName(!listName)}>
        Добавить список  +
        </button>
        </div> */}
  </div>
    )
}
export default List