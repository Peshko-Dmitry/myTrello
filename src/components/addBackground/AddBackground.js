import React, {useState, useEffect} from "react";
import './index.scss'
import Img_1 from '../../img/img_1.jpg'
import Img_2 from '../../img/img_2.jpg'
import Img_3 from '../../img/img_3.jpg'
import Img_4 from '../../img/img_4.jpg'

    
const AddBackground = ({background, setBackground,activeBackground, setActiveBackground}) => {
    const imageSrc = [Img_1,Img_2,Img_3,Img_4]
    const [openBackground, setOpenBackground] = useState(false)
    

const addBackground = (img)=> {
    setActiveBackground(img)
    setBackground([img])
}

useEffect(()=>{
  localStorage.setItem('background', JSON.stringify(background))
},[background, openBackground,activeBackground ])

    return(
        <div className="background">
            <button onClick={()=>setOpenBackground(!openBackground)}
                className="btn">Фон</button>
            <div className={openBackground ? "background-open block" : "background-open none"}></div>
            <div className={openBackground ? "background-window block" : "background-window none"}>
            <svg onClick={()=>setOpenBackground(!openBackground)}
                    className="closed" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 320 512">
                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
            </svg>
            <span className="title">Выберете фон приложения</span>
            <div className="background-list">
                {
                    imageSrc.map(img => {
                        return(
                            <img className={activeBackground === img ? "image active" : "image"}
                                onClick={()=> addBackground(img)}
                                key={img} 
                                src={img} 
                                alt="img" />
                        )
                    })
                }
                {/* <img src={Img} alt="img" /> */}
                
            </div>

            </div>

      </div>
    )
}
export default AddBackground