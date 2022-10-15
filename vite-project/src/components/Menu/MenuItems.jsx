import React from "react";
import { useNavigate } from "react-router";
import { MenuAnt } from "./styled";

const MenuItems = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "",
      key: "logo",
      id: "logo",
      onClick: () => navigate("/"),
    },
    {
      label: "Kontakt",
      key: "item-1 ",
      onClick: () => navigate("/kontakt"),
    },
    {
      label: "Dostępność",
      key: "item-2",
      onClick: () => navigate("/dostepnosc"),
    },
  ];

  return (
    <MenuAnt mode="horizontal" items={items} style={{ textAlign: "center" }} />
  );
};

export default MenuItems;
