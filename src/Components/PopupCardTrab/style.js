import styled from "styled-components";

export const Div = styled.div`
    position: absolute;
    background-color: rgba(51, 51, 51, 0.5);;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    top:0px;    
`;

export const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        font-size:18px;
    }
`;

export const Span = styled.span`
    color: #999999;
`;

export const DivContainer = styled.div` 
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #FFFFFF;
    width: 280px;
    margin: auto;
    padding: 13px 22px 26px 22px;
    h2{
        margin:0;
    }
`;
