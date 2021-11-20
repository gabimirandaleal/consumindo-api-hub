import HeaderDashboard from "../../Components/HeaderDashboard";
import {Div, DivContato, DivT, DivDashboard, ButtonN, ButtonL, Header, Contato, DivH, DivC, Perfil} from "./style"
import { Redirect }  from 'react-router-dom'
import PopupTec from "../../Components/PopupTec";
import { useState } from "react";
import PopupTrab from "../../Components/PopupTrab";
import { useEffect } from "react";
import ItemCard from "../../Components/itemCard"
import api from "../../services/api"
import PopupCardTec from "../../Components/PopupCardTec";
import PopupCardTrab from "../../Components/PopupCardTrab";
import Button from "../../Components/Button"
import icon from "../../assets/img/icon.png"
import tel from "../../assets/img/smartphone.png"
import mail from "../../assets/img/mail.png"

function Dashboard({auth, setAuth}){
    
    const [tech, setTech] = useState(false)
    const [trab, setTrab] = useState(false)
    const [cardTech, setCardTech] = useState(false)
    const [cardTrab, setCardTrab] = useState(false)
    const [arrTech, setArrTech] = useState([])
    const [arrTrab, setArrTrab] = useState([])
    const [nome, setNome] = useState("")
    const [nameUser, setNameUser] = useState("")
    const [email, setEmail] = useState("")
    const [contato, setContato] = useState("")
    const [modulo, setModulo] = useState("")
    const [descricao, setDescricao] = useState("")

    useEffect(()=>{

        setArrTech(JSON.parse(localStorage.getItem("Kenzie-Hub:user")).techs)
    }, [tech])
    useEffect(()=>{
        setArrTrab(JSON.parse(localStorage.getItem("Kenzie-Hub:user")).works)
    }, [trab])

    useEffect(()=>{
        setNameUser(JSON.parse(localStorage.getItem("Kenzie-Hub:user")).name)
        setEmail(JSON.parse(localStorage.getItem("Kenzie-Hub:user")).email)
        setContato(JSON.parse(localStorage.getItem("Kenzie-Hub:user")).contact)
        setModulo(JSON.parse(localStorage.getItem("Kenzie-Hub:user")).course_module)
    }, [])


    if(!auth){
        return <Redirect to="/"/>
    }

    function requisicao(){
        api.get(`/users/${JSON.parse(localStorage.getItem("Kenzie-Hub:user")).id}`)
        .then((response) => {
            localStorage.setItem("Kenzie-Hub:user", JSON.stringify(response.data));
            setArrTrab(response.data.works)
            setArrTech(response.data.techs)
        })
        setTech(false)
        setTrab(false)
    }

    function eventoTrab(e){
        setNome(e.target.innerText)
        setDescricao(JSON.parse(localStorage.getItem("Kenzie-Hub:user")).works.find((item) =>(item.title === e.target.innerText)).description)
        setCardTrab(true)
    }

    function eventoTech(e){
        setNome(e.target.innerText)
        setCardTech(true)
    }

    function sair(){
        setAuth(false)
        localStorage.clear()
    }

    return(
        <div>
            {tech && <PopupTec requisicao={requisicao} setTech={setTech}/>}
            {trab && <PopupTrab requisicao={requisicao} setTrab={setTrab}/>}
            {cardTech && <PopupCardTec requisicao={requisicao} nome={nome} setCardTech={setCardTech}/>}
            {cardTrab && <PopupCardTrab descricao={descricao} requisicao={requisicao} nome={nome} setCardTrab={setCardTrab}/>}
            <HeaderDashboard></HeaderDashboard>
            <DivDashboard>
                <Div>
                    <DivT>
                        <h3>Minhas Tecnologias</h3>
                        <ButtonN onClick={() => setTech(true)}>+ </ButtonN>
                    </DivT>
                    
                    <div>
                        {
                            arrTech.map((item, index) => (
                                <ItemCard onClick={eventoTech} key={index} color="true" nome={item.title} text={item.status}/>
                            ))
                        }
                    </div>
                </Div>
                <Div>
                    <DivT>
                        <h3>Meus Trabalhos</h3>
                        <ButtonL onClick={() => setTrab(true)}>+</ButtonL>
                    </DivT>
                    
                    <div>
                        {
                            arrTrab.map((item, index) => (
                                <ItemCard onClick={eventoTrab}  key={index} nome={item.title} text={item.description}/>
                            ))
                        }
                    </div>
                </Div>
                <DivH>
                    <Header>
                        <img src={icon} alt="" />
                        <DivC>
                            <h3>{nameUser}</h3>
                            <span>{`${modulo} módulo`}</span>
                            <span>Curso Fullstack</span>
                        </DivC>
                    </Header>
                    <Contato>
                        <Perfil color="true">
                            <img src={tel} alt="" />
                            <DivContato>
                                <h3>Ligar agora</h3>
                                <span>{contato}</span>
                            </DivContato>
                        </Perfil>
                        <Perfil>
                            <img src={mail} alt="" />
                            <DivContato>
                                <h3>Enviar email</h3>
                                <span>{email}</span>
                            </DivContato>
                        </Perfil>
                        <Button onclick={sair} text={"Sair"}></Button>
                    </Contato>
                </DivH>
            </DivDashboard>
        </div>
    )
}

export default Dashboard;