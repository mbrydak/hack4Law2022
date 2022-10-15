import styled from "styled-components";
import { Menu } from "antd";

export const MenuAnt = styled(Menu) `
    display: flex;
    justify-content: right;
    flex-direction: row;
    background-color: white;
    padding: 20px 50px 20px 0px;
    font-size: 18px;
    border: none;
    & li:nth-child(3) {
        margin-right: 150px;
    }

    #logo {
        margin: 0 auto;
    }
`