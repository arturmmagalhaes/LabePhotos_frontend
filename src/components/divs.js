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
    justify-content: center;
    align-items: center;
`

//Footer
export const Footer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 75px;
    background-color: #FFF;
`

export const Icon = styled.div`
    display: grid;
    justify-content: center;
`

//Rest
export const Container = styled.div`
    display: grid;
    width: 375px;
    max-height: 812px;
    background-color: #FF0000;
    justify-content: center;
    align-items: center;
`

export const SecundaryContainer = styled.div`
    width: 375px;
    min-height: 812px;
    max-height: 812px;
    background-color: #FF0000;
    justify-content: center;
    align-items: center;
`

export const DivContent = styled.div`
    display: grid;
    height: 662px;
    justify-content: center;
    align-items: center;
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

export const Image = styled.img`
    width: 301px;
    height: 244px;
`
