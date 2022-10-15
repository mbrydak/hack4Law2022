import React from "react";
import { Button } from "antd";
import {
  Container,
  ItemsText,
  ItemImage,
  Title,
  Image,
  Subtitle,
} from "./styled";
import ImageCall from "../../assets/call.png";

const QuestionSection = () => {
  return (
    <Container>
      <ItemsText>
        <Title>Masz pytania?</Title>
        <Subtitle>Pozostań w kontakcie</Subtitle>
        <Button type="primary">Skontaktuj się z nami</Button>
      </ItemsText>
      <ItemImage>
        <Image src={ImageCall} />
      </ItemImage>
    </Container>
  );
};

export default QuestionSection;
