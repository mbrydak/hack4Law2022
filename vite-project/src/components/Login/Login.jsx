import React from "react";
import { useTranslation } from "react-i18next";
import api from "../../services/api.js";
import { AuthCard, AuthContainer, AuthTitle } from "../../styles/auth-page.js";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router";

const Login = () => {
  const {t} = useTranslation();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const login = values => {
    const {email, password} = values;
    if (email && password) {
      api.auth.signInWithPassword({email, password}).then(response => {
        if (!response.error) {
          navigate('/law-office');
        }
      });
    }
  }

  return (
    <AuthContainer>
      <AuthCard>
        <AuthTitle level={1}>{t("Header.login")}</AuthTitle>
        <Form name="register" form={form} onFinish={login} layout="vertical">
          <Form.Item label={t("User.email")} name="email">
            <Input placeholder={t("User.email")}/>
          </Form.Item>
          <Form.Item label={t("User.password")} name="password">
            <Input placeholder={t("User.password")}/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">{t("Action.login")}</Button>
          </Form.Item>
        </Form>
      </AuthCard>
    </AuthContainer>
  );
};

export default Login;
