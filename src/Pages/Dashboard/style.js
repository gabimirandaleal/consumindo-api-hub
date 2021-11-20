import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 25px;
    background-color: #F5F5F5;
    padding: 10px 20px;
    flex-direction: column;
    height: 100%;
    width: 25%;
    min-width: 240px;
    div{
        width: 100%;
    }
`;

export const DivT = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 240px;
`;


export const DivDashboard = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: 1242px){
        justify-content: space-between;
    }
`;

export const ButtonN = styled.button`
    background: #11995E;
    border-radius: 5px;
    padding: 5px 13px;
    border: 0px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;   
`;

export const ButtonL = styled(ButtonN)`
    background: #403CAA;
`;

export const Header = styled.header`
    display: flex;
    background: #403CAA;
    padding: 20px 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    img{
        border-radius: 100px;
        width: 70px;
        height: 70px;
        object-fit: cover;
        margin-right: 5%;
    }

    h3, span{
        margin: 0px;
        color: white;
    }
    span{
        margin: 2px 0px;
    }
`;

export const DivH = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 25px;
    background-color: #Fff;
    border: 2px solid #f5f5f5;
    flex-direction: column;
    height: 100%;
    min-width: 280px;
    max-width:500px;
`;

export const Perfil = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 10px 10px 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${props => props.color ?  "#403CAA1A" : "#11995E1A"};
    img{
        padding: 20px;
        margin-right: 10px;
        border-radius: 10px;
        background-color: ${props => props.color ?  "#403CAA" : "#11995E"};
    }
    h3{
        margin: 0px;
    }
`;

export const DivC = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin: 0px 30px 0px 0px;
`;

export const DivContato = styled.div`
    span{
        word-break: break-all;
    }
`;

export const Contato = styled.div`
    margin: 20px 0px;
`;

