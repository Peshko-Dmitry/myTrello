import './index.scss'
const DeleteCard = ({element, item, list, text, setList, deleteCard, setDeleteCard}) => {

    const deleteCardFn = () => {

        let newArr = list.map(i => {
            if(i.id === item.id){
              i.tasks = i.tasks.filter(x => x.task !== element.task)
                return i
            } else {
                return i
            }
        })
        setList(newArr)
        
        setDeleteCard(false)

    }
    
    return(
        <> 
        <div className={deleteCard ? "delete-card-background" : "delete-card-background none"}></div>
        <div className={deleteCard ? "delete-card-window" : "delete-card-window none"}>
            <p>Вы действительно хотите удалить карточку: <strong>{element.task}</strong>?</p>
            <button onClick={deleteCardFn}>ДА</button>
            <button onClick={()=>setDeleteCard(false)}>НЕТ</button>
        </div>
        
        </>
    )
}
export default DeleteCard