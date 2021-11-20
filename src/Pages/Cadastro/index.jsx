
import Header from "../../Components/Header"
import {TextField, InputLabel, NativeSelect} from "@mui/material"
import {Div, Form, Error} from "./style"
import Button from "../../Components/Button"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, Redirect }  from 'react-router-dom'
import api from "../../services/api"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cadastrar({setAuth, auth}){
    const history = useHistory();

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório").matches(/^[a-zA-Z '.-]*$/, "Somente letras"),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        bio: yup.string().required("Bio obrigatória"),
        contact: yup.string().required("Contato obrigatório"),
        password: yup.string().required("Senha obrigatória").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "No mínimo 8 caracters;Pelo menos uma letra;Pelo menos uma número;Pelo menos um caractere especial"),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Senhas não coincidem"),
        course_module: yup.string().required("Módulo obrigatório")
    })
    
      const { register, 
              handleSubmit, 
              formState: { errors },
      } = useForm({
        resolver:yupResolver(formSchema),
      })
    
      const onSubmitFunction = data => {
        delete data.confirmPassword
        api.post("/users", data)
        .then((_) => {
            toast.success("Usuário cadastrado com sucesso")
            history.push("/")
        }).catch((err) =>{
            console.log("Oi")
            toast.error("Usuário já cadastrado")
        })
      }

    if(auth){
        return <Redirect to="/dashboard"/>
    }

    return(
        <Div>
            <Header></Header>
            <Form onSubmit={handleSubmit(onSubmitFunction)}>
                <TextField {...register("name")} margin="normal" fullWidth id="login-basic" label="Nome" variant="outlined" />
                <Error>
                    {
                    errors.name?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                </Error>
                <TextField {...register("email")} margin="normal" fullWidth type="email" id="password-basic" label="E-mail" variant="outlined" />
                <Error >
                    {
                    errors.email?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                </Error>
                <TextField {...register("bio")} margin="normal" fullWidth id="bio-basic" label="Bio" variant="outlined" />
                <Error>
                    {
                    errors.bio?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                </Error>
                <TextField {...register("contact")} margin="normal" fullWidth id="contact-basic" label="Contato" variant="outlined" />
                <Error>
                    {
                    errors.contact?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                  </Error>
                <InputLabel htmlFor="select">Selecionar módulo:</InputLabel>
                <NativeSelect  {...register("course_module")} fullWidth id="select">
                    <option value={(event) => event.target.value}>Primeiro</option>
                    <option value={(event) => event.target.value}>Segundo</option>
                    <option value={(event) => event.target.value}>Terceiro</option>
                    <option value={(event) => event.target.value}>Quarto</option>
                </NativeSelect>
                <Error margin="5">
                    {
                    errors.course_module?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                </Error>
                <TextField type="password" {...register("password")} margin="normal" fullWidth id="password-basic" label="Senha" variant="outlined" />
                <Error>
                    {
                    errors.password?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                </Error>
                <TextField type="password" {...register("confirmPassword")} margin="normal" fullWidth id="passwordconfirm-basic" label="Confirmar senha" variant="outlined" />
                <Error>
                    {
                    errors.confirmPassword?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                </Error>
                <Button type="submit" text={"Cadastrar"} color="true"></Button>
                <Button text={"Login"} onclick={()=> history.push("/")}></Button>
            </Form>
        </Div>
    )
}

export default Cadastrar;