import React, { useEffect, useState } from "react";
import './index.scss'

const OpenCard = ({item, list, text, setList, element, setOpenCard, openCard, newTitleCard, editCard, editActive, openCardFn}) => {
    
    const colors =['#61bd4f', '#f2d600', '#ff9f1a','#eb5a46', '#c377e0', '#0079bf', '#ff78cb', '#344563']
    const [labelsCard, setLabelsCard] = useState([])
    const [descriptionCard, setDescriptionCard] = useState('')
    // const [activColor, setActiveColor] = useState(false)

    const addLabelsAndDescriptionCard = () => {
        let newArr = list.map(i => {
           
            i.tasks.map(el => {
                if(el.task === element.task) {
                    el.labels = labelsCard
                    el.description = descriptionCard
                    return el
                } else {
                    return el
                }
            })
            return i
        })

        setList(newArr)
        editCard()
    }
    const description = (event) => {
        setDescriptionCard(event.target.value)
    }

    const deleteColor = (event) => {
        event.target.classList.remove('active')
        setLabelsCard(labelsCard.filter(i => i !== event.target.parentElement.style.background))
    }
    const addColor = (event) => {
            if(event.target.tagName === 'path') return
            else {
                event.target.children[0].classList.add('active')
            } 
            if(event.target.style.background){
                setLabelsCard([...labelsCard, event.target.style.background])
            } 


    }

    useEffect(()=> {

    },[labelsCard])
    

    return(
        <>
        <div className={openCard ? 'open-card-background block' : 'open-card-background none'} >

        </div>
        <div className={openCard ? 'open-card block' : 'open-card none'} >
        
            <div className="open-card-title">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M368 344h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 344 368 344zM208 320c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 291.3 172.7 320 208 320zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16h-192c0-44.18-35.82-80-80-80h-64C131.8 352 96 387.8 96 432H64c-8.822 0-16-7.178-16-16V160h480V416zM368 264h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 264 368 264z"/>
                </svg>
                <input 
                    onChange={(event)=> newTitleCard(event)} 
                    type="text" 
                    value={text} />
            </div>
            <div className="open-card-label">
                {
                    labelsCard.map((color, index) => {
                        return(
                            <span key={`openCard-${color}`} style={{background: color}}></span>
                        )
                    })
                }
            

            </div>
            <svg onClick={()=>setOpenCard(false)}
                    className="closed" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 320 512">
                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                </svg>
            
            <div className="open-card-labels">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"/>
            </svg>
                <p >Добавить метки</p>
                <div className="colors">
                    {
                        colors.map((item, index) => {
                            return(
                                
                                <span onClick={(event)=> addColor(event)}
                                    key={`${item}--${index}`} 
                                    className={`color-${item}`} 
                                    style={{background: item}}>

                                    <svg  
                                    onClick={(event)=> deleteColor(event)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>
                                    </svg>  
                                    
                                </span>
                                
                          )
                        
                        })
                    }
                    
                </div>

            </div>
            <div className="open-card-description"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M128 192C110.3 192 96 177.7 96 160C96 142.3 110.3 128 128 128C145.7 128 160 142.3 160 160C160 177.7 145.7 192 128 192zM200 160C200 146.7 210.7 136 224 136H448C461.3 136 472 146.7 472 160C472 173.3 461.3 184 448 184H224C210.7 184 200 173.3 200 160zM200 256C200 242.7 210.7 232 224 232H448C461.3 232 472 242.7 472 256C472 269.3 461.3 280 448 280H224C210.7 280 200 269.3 200 256zM200 352C200 338.7 210.7 328 224 328H448C461.3 328 472 338.7 472 352C472 365.3 461.3 376 448 376H224C210.7 376 200 365.3 200 352zM128 224C145.7 224 160 238.3 160 256C160 273.7 145.7 288 128 288C110.3 288 96 273.7 96 256C96 238.3 110.3 224 128 224zM128 384C110.3 384 96 369.7 96 352C96 334.3 110.3 320 128 320C145.7 320 160 334.3 160 352C160 369.7 145.7 384 128 384zM0 96C0 60.65 28.65 32 64 32H512C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H512C520.8 432 528 424.8 528 416V96C528 87.16 520.8 80 512 80H64C55.16 80 48 87.16 48 96z"/>
            </svg> 
                <p>Описание</p>
                 <textarea onChange={(event)=> description(event)} name="" id="" cols="30" rows="10" placeholder="Введите описание">

                 </textarea>
                <button onClick={addLabelsAndDescriptionCard} className="save-card btn">Сохранить карточку</button>

            </div>
            {/* <svg  
                        className="closed" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 320 512">
                        <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
            </svg>  */}
        </div> 
        </>
    )
}
export default OpenCard
