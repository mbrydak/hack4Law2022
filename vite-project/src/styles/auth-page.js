import styled from "styled-components";
import { Typography } from "antd";

export const AuthContainer = styled.div`
  background: #DCDCDC80;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const AuthCard = styled.div`
  background: white;
  width: 30rem;
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem 2rem 4rem;
`;

export const AuthTitle = styled(Typography.Title)`
  text-align: center;
`;
