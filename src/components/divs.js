import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    width: 375px;
    height: 812px;
    background-color: #FF0000;
    justify-content: center;
    align-items: center;
`

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