import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

`;


export const Form = styled.form`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    border: 2px solid #F5F5F5;
    padding: 40px 19px 26px 19px;
    margin-top: 20px;
    @media (min-width: 800px){
        width: 400px;
    }
 
`;

export const Span = styled.span`
    font-size: 12px;
    color: #999999;
    margin-top: 10px;
`;
export const SpanH = styled(Span)`
    margin: 0px;
    color: black;
`;

export const Error = styled.ul`
    margin: 0px;
    text-align: start;
    margin-bottom: 15px;
    margin-top: ${props => props.margin ? `${props.margin}px`: "-5px"};
    font-size: 10px;
    color: rgb(240, 42, 42);
    padding: 0px 0px 0px 5px;
    
    li{
        list-style: inside;
    }
`;

export const DivSpan = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;