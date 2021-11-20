import {Div, DivContainer, DivHeader, Span} from "./style"
import Button from "../Button"
import api from "../../services/api"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function PopupCardTrab({setCardTrab, requisicao, nome, descricao}){
    function removerTec(){
        console.log()
        const token = JSON.parse(localStorage.getItem("Kenzie-Hub:token"))
        api.delete(`/users/works/${JSON.parse(localStorage.getItem("Kenzie-Hub:user")).works.find((item) =>(item.title === nome)).id}`, {headers: { Authorization: `Bearer ${token}` }})
        .then((_) => {
            setCardTrab(false)
            requisicao()
            toast.success("Trabalho removido com sucesso")
        })
        
    }

    return(
        <Div>
            <DivContainer>
                <DivHeader>
                    <h2>{nome}</h2>
                    <Span onClick={() => setCardTrab(false)}>X</Span>
                </DivHeader>
                <span>{descricao}</span>
                
                <Button onclick={removerTec} text={"Remover"} color="true" type="submit"></Button>
            </DivContainer>
        </Div>
    )


}

export default PopupCardTrab;