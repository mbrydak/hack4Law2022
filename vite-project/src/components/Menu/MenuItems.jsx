import React from "react";
import { useNavigate } from "react-router";
import { MenuAnt } from "./styled";
import "antd/dist/antd.css";

const MenuItems = () => {
  const navigate = useNavigate();

  const items = [
    { label: "Logo", key: "logo", id: "logo" },
    {
      label: "Regulamin",
      key: "item-1 ",
      onClick: () => navigate("/regulamin"),
    },
    {
      label: "Prawa autorskie",
      key: "item-2",
      onClick: () => navigate("/register"),
    },
    {
      label: "Warunki korzystania",
      key: "item-3 ",
      onClick: () => navigate("/warunki"),
    },
    { label: "RODO", key: "item-4 ", onClick: () => navigate("/rodo") },
    {
      label: "Dostępność",
      key: "item-5 ",
      onClick: () => navigate("/dostępność"),
    },
    {
      label: "sub menu",
      key: "submenu",
      children: [{ label: "item 3", key: "submenu-item-1" }],
    },
  ];

  return (
    <MenuAnt mode="horizontal" items={items} style={{ textAlign: "center" }} />
  );
};

export default MenuItems;
