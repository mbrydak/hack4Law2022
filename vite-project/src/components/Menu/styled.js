import styled from "styled-components";
import { Menu } from "antd";

export const MenuAnt = styled(Menu) `
    display: flex;
    justify-content: right;
    flex-direction: row;
    background-color: white;
    padding: 20px 50px 20px 0px;
    font-size: 20px;
    border: none;
    #logo {
        background-color: red;
        margin: 0 auto;
    }
`