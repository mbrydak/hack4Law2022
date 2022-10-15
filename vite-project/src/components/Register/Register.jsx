import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { AuthCard, AuthContainer, AuthTitle } from "../../styles/auth-page.js";
import api from "../../services/api.js";
import { Client } from "../../models/role.js";
import { useNavigate } from "react-router";
import handleError from "../../utils/handle-error.js";

const Register = () => {
  const {t} = useTranslation();
  const [form] = Form.useForm();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();

  const toggleIsConfirmed = event => {
    setIsConfirmed(event.target.checked);
  }

  const register = async values => {
    if (isConfirmed) {
      const {firstName, lastName, email, pesel, phone, password, passwordConfirmation} = values;
      if (password === passwordConfirmation) {
        const signUp = await api.auth.signUp({
          email,
          password,
        }).then(handleError);
        await api.from('profiles').insert({
          user_id: signUp.data.user.id,
          first_name: firstName,
          last_name: lastName,
          pesel,
          phone,
          role: Client
        }).then(handleError);
        navigate('/login');
      }
    }
  }

  return (
    <AuthContainer>
      <AuthCard>
        <AuthTitle level={1}>{t("Header.register")}</AuthTitle>
        <Form name="register" form={form} onFinish={register} layout="vertical">
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
          <Form.Item label={t("User.password")} name="password">
            <Input.Password placeholder={t("User.password")}/>
          </Form.Item>
          <Form.Item label={t("User.passwordConfirmation")} name="passwordConfirmation">
            <Input.Password placeholder={t("User.passwordConfirmation")}/>
          </Form.Item>
          <Form.Item>
            <Checkbox checked={isConfirmed} onChange={toggleIsConfirmed}>{t("User.agreementLabel")}</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">{t("Action.register")}</Button>
          </Form.Item>
        </Form>
      </AuthCard>
    </AuthContainer>
  );
};

export default Register;
