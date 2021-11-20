import {Div, DivContainer, DivHeader, Span, Error} from "./style"
import {TextField, InputLabel, NativeSelect} from "@mui/material"
import Button from "../../Components/Button"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services/api"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PopupTec({setTech, requisicao}){

    const formSchema = yup.object().shape({
        title: yup.string().required("Nome obrigatório").matches(/^[a-zA-Z '.-]*$/, "Somente letras"),
        status: yup.string().required("Módulo obrigatório")
    })
    
    const { register, 
            handleSubmit, 
            formState: { errors },
    } = useForm({
    resolver:yupResolver(formSchema),
    })

    const onSubmitFunction = data => {
    const token = JSON.parse(localStorage.getItem("Kenzie-Hub:token"))
        
    api.post("/users/techs", data, {headers: { Authorization: `Bearer ${token}` }})
    .then((_) => {
        setTech(false)
        requisicao()
        toast.success("Tecnologia cadastrada com sucesso")
    }).catch((err) => toast.error("Trabalhos com nomes iguais"))
    }

    return(
        <Div>
            <DivContainer>
                <DivHeader>
                    <h2>Cadastrar Tecnologia</h2>
                    <Span onClick={() => setTech(false)}>X</Span>
                </DivHeader>
                
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <TextField {...register("title")} margin="normal" fullWidth id="login-basic" label="Nome" variant="outlined" />
                    <Error>
                        {
                        errors.title?.message.split(";").map((item)=>(
                            <li>
                            {item}
                            </li>
                        ))
                        
                        }
                    </Error>
                    <InputLabel htmlFor="select">Selecionar módulo:</InputLabel>
                        <NativeSelect {...register("status")} fullWidth id="select">
                            <option value={(event) => event.target.value}>Iniciante</option>
                            <option value={(event) => event.target.value}>Intermediário</option>
                            <option value={(event) => event.target.value}>Avançado</option>
                        </NativeSelect>
                    <Error margin="5">
                        {
                        errors.status?.message.split(";").map((item)=>(
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

export default PopupTec;