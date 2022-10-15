import React from "react";
import {
  ContainerPanel,
  Title,
  Text,
  AntButton,
  Panels,
  BoxTitle,
  Box,
} from "./styled";

const PanelNavigation = () => {
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
          <AntButton type="primary">Logowanie</AntButton>
          <AntButton type="primary">Rejestracja</AntButton>
        </Box>
        <Box>
          <BoxTitle>Firma</BoxTitle>
          <AntButton type="primary">Logowanie</AntButton>
          <AntButton type="primary">Rejestracja</AntButton>
        </Box>
      </Panels>
    </ContainerPanel>
  );
};

export default PanelNavigation;
