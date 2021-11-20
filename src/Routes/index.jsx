import { Route, Switch } from "react-router-dom";
import Login from "../Pages/Login"
import Cadastrar from "../Pages/Cadastro"
import Dashboard from "../Pages/Dashboard"
import { useState, useEffect } from "react";
import { ToastContainer} from 'react-toastify';

function Routes(){
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("Kenzie-Hub:token"))
        
        if(token){
            return setAuth(true)
        }
    }, [auth])

    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Login auth={auth} setAuth={setAuth}></Login>
                </Route>
                <Route exact path="/cadastrar">
                    <Cadastrar auth={auth} setAuth={setAuth}></Cadastrar>
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard auth={auth} setAuth={setAuth}></Dashboard>
                </Route>
            </Switch>
            <ToastContainer />
        </div>
    )
}

export default Routes