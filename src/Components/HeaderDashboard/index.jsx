import {Div} from "./style"
import Header from "../Header"
import icon from "../../assets/img/icon.png"

function HeaderDashboard(){

    return(
        <Div> 
            <Header/>
            <img src={icon} alt="" />
        </Div>
    )


}

export default HeaderDashboard;