import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Banner from "../Banner/Banner.jsx";
import { Container, Text, Title } from "../LawOffice/styled.js";
import { Button, Divider, Form, Input, List, Select, Space, Typography } from "antd";
import api from "../../services/api.js";
import { LinkButton, ListTitle, UserForm, UsersList, UsersListComponent, UsersPanel } from "./styled.js";
import { Admin, Client, FilingOffice, LawOffice } from "../../models/role.js";
import handleError from "../../utils/handle-error.js";
import { PlusOutlined } from "@ant-design/icons";

const Users = () => {
  const {t} = useTranslation();
  const [clients, setClients] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [isEmployeeArchived, setIsEmployeeArchived] = useState(false);
  const [isClientArchived, setIsClientArchived] = useState(false);
  const [currentClientId, setCurrentClientId] = useState(null);
  const [currentEmployeeId, setCurrentEmployeeId] = useState(null);
  const [employeeForm] = Form.useForm();
  const [clientForm] = Form.useForm();

  function loadUsers() {
    api.from('profiles').select().then(response => {
      setEmployees(response.data.filter(user => user.role !== Client));
      setClients(response.data.filter(user => user.role === Client));
    });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const saveClient = async () => {
    const {firstName, lastName, pesel, email, phone} = clientForm.getFieldsValue();
    const payload = {
      first_name: firstName,
      last_name: lastName,
      pesel,
      email,
      phone,
      role: Client
    };

    if (currentClientId) {
      await api.from('profiles').update(payload).eq('user_id', currentClientId).then(handleError)
    } else {
      await api.from('profiles').insert(payload).then(handleError);
      await api.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: 'http://localhost:5173/finish-registration'
        }
      }).then(handleError);
    }
    clearClient();
    loadUsers();
  }

  const saveEmployee = async () => {
    const {firstName, lastName, role, email, phone} = employeeForm.getFieldsValue();
    const payload = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      role
    };

    if (currentEmployeeId) {
      await api.from('profiles').update(payload).eq('user_id', currentEmployeeId).then(handleError)
    } else {
      await api.from('profiles').insert(payload).then(handleError);
      await api.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: 'http://localhost:5173/finish-registration'
        }
      }).then(handleError);
    }
    clearEmployee();
    loadUsers();
  }

  const archiveClient = async () => {
    await api.from('profiles').update({archived: true}).eq('user_id', currentClientId);
    clearClient();
    loadUsers();
  };

  const archiveEmployee = async () => {
    await api.from('profiles').update({archived: true}).eq('user_id', currentEmployeeId);
    clearEmployee();
    loadUsers();
  };

  const editClient = userId => {
    setCurrentClientId(userId);
    clearEmployee();
    const client = clients.find(client => client.user_id === userId);
    clientForm.setFieldsValue({
      firstName: client.last_name,
      lastName: client.last_name,
      email: client.email,
      phone: client.phone,
      pesel: client.pesel,
    });
    setIsClientArchived(client.archived);
  };

  const editEmployee = userId => {
    setCurrentEmployeeId(userId);
    clearClient();
    const employee = employees.find(employee => employee.user_id === userId);
    employeeForm.setFieldsValue({
      firstName: employee.last_name,
      lastName: employee.last_name,
      email: employee.email,
      phone: employee.phone,
      role: employee.role,
    });
    setIsEmployeeArchived(employee.archived);
  };

  const deleteEmployee = async () => {
    await api.from('profiles').delete().eq('user_id', currentEmployeeId);
    clearEmployee();
    loadUsers();
  };

  const deleteClient = async () => {
    await api.from('profiles').delete().eq('user_id', currentClientId);
    clearClient();
    loadUsers();
  };

  function clearClient() {
    setCurrentClientId(null);
    clientForm.resetFields();
    setIsClientArchived(false);
  }

  function clearEmployee() {
    setCurrentEmployeeId(null);
    employeeForm.resetFields();
    setIsEmployeeArchived(false);
  }

  return (
    <>
      <Banner/>
      <Container>
        <Title>Lorem ipsum</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra diam sem, vel posuere nisi aliquam sed.
          In at ante vitae eros fermentum hendrerit. Integer tincidunt vel massa nec feugiat. Etiam finibus orci in
          pellentesque aliquam. Proin laoreet porttitor gravida. Aliquam erat volutpat.
        </Text>
        <Divider/>
        <UsersPanel>
          <UserForm>
            <Typography.Title level={4}>Dodaj swoich współpracowników</Typography.Title>
            <Form name="register" form={employeeForm} onFinish={saveEmployee} layout="vertical"
                  disabled={isEmployeeArchived}>
              <Form.Item label={t("User.firstName")} name="firstName">
                <Input placeholder={t("User.firstName")}/>
              </Form.Item>
              <Form.Item label={t("User.lastName")} name="lastName">
                <Input placeholder={t("User.lastName")}/>
              </Form.Item>
              <Form.Item label={t("User.email")} name="email">
                <Input placeholder={t("User.email")}/>
              </Form.Item>
              <Form.Item label={t("User.phone")} name="phone">
                <Input addonBefore={<Typography.Text>+48</Typography.Text>} placeholder={t("User.phone")}/>
              </Form.Item>
              <Form.Item label={t("User.role")} name="role">
                <Select placeholder={t("User.role")}>
                  <Select.Option value={LawOffice}>{t("User.lawOffice")}</Select.Option>
                  <Select.Option value={FilingOffice}>{t("User.filingOffice")}</Select.Option>
                  <Select.Option value={Admin}>{t("User.admin")}</Select.Option>
                </Select>
              </Form.Item>
            </Form>
            <Space>
              <Button type="primary" onClick={saveEmployee} disabled={isEmployeeArchived}>{t("Action.save")}</Button>
              {currentEmployeeId &&
                <>
                  <Button type="default" danger onClick={archiveEmployee}
                          disabled={isEmployeeArchived}>{t("Action.archive")}</Button>
                  <Button type="primary" danger onClick={deleteEmployee}>{t("Action.delete")}</Button>
                </>
              }
            </Space>
          </UserForm>
          <UsersList>
            <Space>
              <ListTitle level={4}>Lista współpracowników</ListTitle>
              <Button type="primary" icon={<PlusOutlined/>} onClick={clearEmployee}/>
            </Space>
            <UsersListComponent dataSource={employees} locale={{emptyText: t("User.noData")}} renderItem={item => (
              <List.Item>
                <LinkButton type="link" onClick={() => editEmployee(item.user_id)} archived={item.archived ? 1 : 0}>
                  {item.first_name} {item.last_name}
                </LinkButton>
              </List.Item>
            )}>
            </UsersListComponent>
          </UsersList>
        </UsersPanel>
        <Divider/>
        <UsersPanel>
          <UserForm>
            <Typography.Title level={4}>Dodaj klientów</Typography.Title>
            <Form name="register" form={clientForm} onFinish={saveClient} layout="vertical" disabled={isClientArchived}>
              <Form.Item label={t("User.firstName")} name="firstName">
                <Input placeholder={t("User.firstName")}/>
              </Form.Item>
              <Form.Item label={t("User.lastName")} name="lastName">
                <Input placeholder={t("User.lastName")}/>
              </Form.Item>
              <Form.Item label={t("User.email")} name="email">
                <Input placeholder={t("User.email")}/>
              </Form.Item>
              <Form.Item label={t("User.pesel")} name="pesel">
                <Input placeholder={t("User.pesel")}/>
              </Form.Item>
              <Form.Item label={t("User.phone")} name="phone">
                <Input addonBefore={<Typography.Text>+48</Typography.Text>} placeholder={t("User.phone")}/>
              </Form.Item>
            </Form>
            <Space>
              <Button type="primary" onClick={saveClient} disabled={isClientArchived}>{t("Action.save")}</Button>
              {currentClientId &&
                <>
                  <Button type="default" danger onClick={archiveClient}
                          disabled={isClientArchived}>{t("Action.archive")}</Button>
                  <Button type="primary" danger onClick={deleteClient}>{t("Action.delete")}</Button>
                </>
              }
            </Space>
          </UserForm>
          <UsersList>
            <Space>
              <ListTitle level={4}>Lista klientów</ListTitle>
              <Button type="primary" icon={<PlusOutlined/>} onClick={clearClient}/>
            </Space>
            <UsersListComponent dataSource={clients} locale={{emptyText: t("User.noData")}} renderItem={item => (
              <List.Item>
                <LinkButton archived={item.archived ? 1 : 0} type="link" onClick={() => editClient(item.user_id)}>
                  {item.first_name} {item.last_name}
                </LinkButton>
              </List.Item>
            )}>
            </UsersListComponent>
          </UsersList>
        </UsersPanel>
      </Container>
    </>
  );
};

export default Users;
