import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import {
  FooterContainer,
  Icons,
  FooterItem,
  FooterItem1,
  FooterItem2,
  FooterItem3,
  Text,
} from "./styled";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterItem>
          <FooterItem1>
            <Text>Regulamin</Text>
            <Text>Prawa autorskie</Text>
            <Text>Polityka cookies</Text>
            <Text>Warunki korzystania</Text>
          </FooterItem1>
          <FooterItem2>
            <Text>Mapa strony</Text>
            <Text>Klauzula RODO</Text>
          </FooterItem2>
        </FooterItem>

        <FooterItem3>
          <Text>Dołącz do nas</Text>
          <Icons>
            <FacebookOutlined style={{ fontSize: "30px" }} />
            <TwitterOutlined
              style={{ fontSize: "30px", margin: "0 5px 0 5px" }}
            />
            <LinkedinOutlined style={{ fontSize: "30px" }} />
          </Icons>
        </FooterItem3>
      </FooterContainer>
    </>
  );
};

export default Footer;
