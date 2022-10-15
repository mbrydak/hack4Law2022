import styled from "styled-components";
import { Button, List, Typography } from "antd";

export const UsersPanel = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 10rem;
`;

export const UserForm = styled.section`
  grid-column: 1;
`;

export const UsersList = styled.section`
  grid-column: 2;
`;

export const UsersListComponent = styled(List)`
  overflow-y: auto;
  max-height: 30rem;
`;

export const LinkButton = styled(Button)`
  padding: 0;
  color: ${props => props.archived ? 'darkgray' : 'black'};
`;

export const ListTitle = styled(Typography.Title)`
  margin: 0 !important;
`;
