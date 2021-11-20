import {Div} from "./style"
import imgTecnologia from "../../assets/img/codesandbox.png"
import imgTrabalhos from "../../assets/img/git-pull-request.png"

function ItemCard({color, nome, text, onClick}){

    return(
        <Div  color={color}>
            <img src={color ? imgTecnologia : imgTrabalhos } alt="" />
            <div>
                <h3 onClick={onClick}>{nome}</h3>
                { color ? 
                    <span>{text}</span>
                    :
                    <p>{text.length > 20 ? `${text.substring(0, 20)}...` : text}</p>
                }
                
            </div>
        </Div>
    )


}

export default ItemCard;