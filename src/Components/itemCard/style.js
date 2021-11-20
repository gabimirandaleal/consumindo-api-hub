import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border-right: 4px solid ${props => props.color ? "rgba(17, 153, 94, 0.1)" : "rgba(64, 60, 170, 0.1)"};
    border-radius: 5px;
    width: 100%;
    @media (min-width: 800px){
        width: 350px;
    }

    :hover{
        border-right: 4px solid ${props => props.color ? "#11995E" : "#403CAA"};
        img{
            background-color: ${props => props.color ? "#11995E80" : "#403CAA80"};
        }
    }
    
    img{
        width: 20px;
        height: 20px;
        padding: 30px;
        margin-right: 10px;
        background-color: ${props => props.color ? "rgba(17, 153, 94, 0.1)" : "rgba(64, 60, 170, 0.1)"};
        border-radius: 5px;
    }

   

    h3{
        margin: 0;
        cursor: pointer;
    }
    p{
        margin: 0;
        font-size: 12px;
        margin-top: 5px;
        margin-right: 10px;
    }
`;
