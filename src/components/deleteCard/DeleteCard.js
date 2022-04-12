const DeleteCard = ({element, item, lis, text, setList, deleteCard, setDeleteCard}) => {
    console.log('hi')
    console.log(element)
    console.log(item)
    return(
        <> 
        <div className="delete-card-background"></div>
        <div className="delete-card-window">
            <span>Вы действительно хотите удалить карточку: {null}</span>
            <button>ДА</button>
            <button>НЕТ</button>
        </div>
        
        </>
    )
}
export default DeleteCard