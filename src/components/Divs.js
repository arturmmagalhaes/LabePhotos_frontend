import styled from 'styled-components';

//Header
export const Header = styled.div`
    background-color: #FFF;
    color: #F00;
    font-family: 'Abel', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 42px;
    line-height: 59px;
    text-align: center;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BackPage = styled.div`
    width: 20px;
    padding: 12px;
    cursor: pointer;
`;

//Footer
export const Footer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 75px;
    width: 400px;
    background-color: #FFF;
    position: fixed;
    bottom: 0;

    @media (max-width: 1024px){
        width: 100vw;
    }
`

export const Icon = styled.div`
    display: grid;
    justify-content: center;
`

//Rest
export const Container = styled.div`
    display: grid;
    width: 400px;
    min-height: 100vh;
    background-color: #FF0000;
    justify-content: center;
    align-items: center;
    margin: auto;

    @media (max-width: 1024px){
        width: 100vw;
    }
`

export const SecundaryContainer = styled.div`
    width: 400px;
    flex-grow: 1;
    background-color: #FF0000;
    justify-content: center;
    align-items: center;
    margin: auto;

    @media (max-width: 1024px){
        width: 100vw;
    }
`

export const DivContent = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    height: 87vh;
`;

export const Logo = styled.div`
    font-family: 'Abel', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 46px;
    line-height: 59px;
    text-align: center;
    text-decoration-line: underline;
    color: #FFFFFF;
`

export const DivButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`

export const DivInputs = styled.div`
    display: grid;
    grid-row-gap: 15px;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    border-radius: 12px;
    background-color: #FFF;
    margin: 0px 0px 20px 0px;
    cursor: pointer;
`

export const Image = styled.img`
    width: 301px;
    height: 244px;
`
