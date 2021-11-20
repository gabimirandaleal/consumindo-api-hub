import {Div, DivContainer, DivHeader, Span, Error} from "./style"
import {TextField} from "@mui/material"
import Button from "../../Components/Button"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services/api"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PopupTrab({setTrab,  requisicao}){

    const formSchema = yup.object().shape({
        title: yup.string().required("Nome obrigatório"),
        description: yup.string().required("Descrição obrigatória")
    })
    
    const { register, 
            handleSubmit, 
            formState: { errors },
    } = useForm({
    resolver:yupResolver(formSchema),
    })

    const onSubmitFunction = data => {
        data = {...data, "deploy_url": "https://kenziehub.me"} 
        const token = JSON.parse(localStorage.getItem("Kenzie-Hub:token"))
        
        api.post("/users/works", data, {headers: { Authorization: `Bearer ${token}` }})
        .then((response) => {
            setTrab(false)
            requisicao()
            toast.success("Trabalho cadastrado com sucesso")
        }).catch((err) => toast.error("Trabalhos com nomes iguais"))
    }

    return(
        <Div>
            <DivContainer>
                <DivHeader>
                    <h2>Cadastrar Trabalho</h2>
                    <Span onClick={() => setTrab(false)}>X</Span>
                </DivHeader>
                
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <TextField {...register("title")} margin="normal" fullWidth id="login-basic" label="Nome do trabalho" variant="outlined" />
                    <Error>
                    {
                        errors.title?.message.split(";").map((item)=>(
                            <li>
                            {item}
                            </li>
                        ))
                        
                        }
                    </Error>
                    <TextField
                            fullWidth
                            id="filled-textarea"
                            label="Descrição do Trabalho"
                            placeholder="Descrição do Trabalho"
                            multiline
                            variant="filled"
                            {...register("description")}
                    />
                    <Error margin="5">
                    {
                        errors.description?.message.split(";").map((item)=>(
                            <li>
                            {item}
                            </li>
                        ))
                        
                        }
                    </Error>
                    <Button text={"Cadastrar"} color="true" type="submit"></Button>
                </form>
            </DivContainer>
        </Div>
    )


}

export default PopupTrab;