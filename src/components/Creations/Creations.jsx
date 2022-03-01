import react from "react";
import { Link } from "react-router-dom";
import "./Style-Creations.css"

function Creations ({title,imgSrc,MbileImgSrc,link}){
    return(
        <>
           <Link className="Grouping-Creations" to={link} id="">
                <img src={imgSrc} className="imgSrc" alt="" />               
                <img src={MbileImgSrc} className="MbileImgSrc" alt="" />               
                <p className="title">{title}</p>
           </Link>
        </>
    )
}

export default Creations;