import Header from "../../Components/Header"
import {TextField} from "@mui/material"
import {Div, Form, Span, SpanH, Error, DivSpan} from "./style"
import Button from "../../Components/Button"
import api from "../../services/api"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, Redirect}  from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({auth, setAuth}){
    const history = useHistory();

    
    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória"),
    })

    const { register, 
            handleSubmit, 
            formState: { errors },
    } = useForm({
        resolver:yupResolver(formSchema),
    })

    
    if(auth){
        return <Redirect to="/dashboard"/>
    }



    const onSubmitFunction = data => {
        api.post("/sessions", data)
        .then((response) => {
            const {token, user} = response.data
            localStorage.clear()
            localStorage.setItem("Kenzie-Hub:token", JSON.stringify(token));
            localStorage.setItem("Kenzie-Hub:user", JSON.stringify(user));
            setAuth(true)
            return history.push("/dashboard")
        }).catch((err) => toast.error("E-mail ou senha inválidos"))
    }

    

    return(
        <Div>
            <Header></Header>
            <Form onSubmit={handleSubmit(onSubmitFunction)}>
                <TextField margin="normal" fullWidth id="login-basic" label="E-mail" variant="outlined" {...register("email")}/>
                <Error>
                    {
                    errors.email?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                  </Error>
                <TextField margin="normal" fullWidth type="password" id="password-basic" label="Password" variant="outlined" {...register("password")}/>
                <Error>
                    {
                    errors.password?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                  </Error>
                <Button text={"Logar"} color="true">Logar</Button>
                <DivSpan>
                    <Span>Criar uma página para mostrar suas</Span>
                    <SpanH>habilidades metas e progressos</SpanH>
                </DivSpan>
                <Button type="submit" onclick={() => history.push("/cadastrar")} text={"Cadastre-se"}></Button>
            </Form>
        </Div>
    )
}

export default Login;