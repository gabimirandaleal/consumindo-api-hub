import {Div, DivContainer, DivHeader, Span} from "./style"
import Button from "../Button"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../../services/api"


function PopupCardTec({setCardTech, requisicao, nome}){
    


    function removerTec(){
        console.log()
        const token = JSON.parse(localStorage.getItem("Kenzie-Hub:token"))
        api.delete(`/users/techs/${JSON.parse(localStorage.getItem("Kenzie-Hub:user")).techs.find((item) =>(item.title === nome)).id}`, {headers: { Authorization: `Bearer ${token}` }})
        .then((_) => {
            setCardTech(false)
            requisicao()
            toast.success("Tecnologia removida com sucesso")
        })
        
    }

    return(
        <Div>
            <DivContainer>
                <DivHeader>
                    <h2>{nome}</h2>
                    <Span onClick={() => setCardTech(false)}>X</Span>
                </DivHeader>
                
                <Button onclick={removerTec} text={"Remover"} color="true" type="submit"></Button>
            </DivContainer>
        </Div>
    )


}

export default PopupCardTec;