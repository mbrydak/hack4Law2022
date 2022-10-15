import styled from "styled-components";
import { Button } from 'antd';


export const ContainerPanel = styled.div `
    width: 80%;
    margin: 0 auto;
    padding-top: 80px;
`

export const Title = styled.h1 `
    text-align: center;
`

export const Text = styled.p `
    text-align: justify;
`

export const AntButton = styled(Button)`
   width: 350px;
   margin-bottom: 10px;
`

export const Panels = styled.div `
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 88px;
`

export const BoxTitle = styled.h1 `
    text-align: center;
    font-weight: 400;
`


export const Box = styled.div `
    display: flex;
    flex-direction: column;

`