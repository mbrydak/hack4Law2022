import React from "react";
import {
  ContainerPanel,
  Title,
  Text,
  AntButtonClient,
  AntButtonCompany,
  Panels,
  BoxTitle,
  Box,
} from "./styled";
import { useNavigate } from "react-router";

const PanelNavigation = () => {
  const navigate = useNavigate();

  return (
    <ContainerPanel>
      <Title>Lorem ipsum dolor</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        bibendum posuere urna quis pharetra. Aenean libero sem, porttitor eget
        sem sed, vehicula sodales sem. Nulla eros nibh, tempor eu orci a,
        suscipit commodo tellus. Duis nisl metus, aliquet sed sodales eu,
        condimentum non nisi. Nunc aliquam pulvinar dictum. Maecenas
        condimentum, purus ac bibendum semper, ipsum mauris volutpat ante, sed
        commodo nisl felis in lacus. Praesent imperdiet ac orci ac rhoncus. In
        enim erat, sodales euismod fringilla nec, ullamcorper ut sapien.
        Suspendisse potenti. Donec posuere velit at ultricies facilisis. Vivamus
        augue tellus, ultricies vitae erat eget, porttitor vestibulum magna. Sed
        eu rutrum lacus. Donec quam metus, euismod at diam vitae, ornare ornare
        arcu.
      </Text>
      <Panels>
        <Box>
          <BoxTitle>Klient</BoxTitle>
          <AntButtonClient type="primary" onClick={() => navigate("/login")}>
            Logowanie
          </AntButtonClient>
          <AntButtonClient type="primary" onClick={() => navigate("/register")}>
            Rejestracja
          </AntButtonClient>
        </Box>
        <Box>
          <BoxTitle>Firma</BoxTitle>
          <AntButtonCompany type="primary" onClick={() => navigate("/login")}>
            Logowanie
          </AntButtonCompany>
        </Box>
      </Panels>
    </ContainerPanel>
  );
};

export default PanelNavigation;
