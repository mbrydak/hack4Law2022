import styled from "styled-components";
import { Image } from 'antd';

export const Container = styled.div `
width: 100%;
margin: 0 auto;
margin-top: 80px;
background-color: #55AF8F;
`

export const Title = styled.h1 `
    color: #fff;
    text-align: center;
    margin-bottom: 50px;
`

export const Category = styled.div `
    margin-top: 80px;
`

export const ImagePanel = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 50px;
`

export const ImageBox = styled.div `

`

export const ImageCategory = styled(Image) `
    padding: 10px;
`

export const ImageTitle = styled.p `
    text-align: center;
`