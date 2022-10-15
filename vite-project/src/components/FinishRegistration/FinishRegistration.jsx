import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AuthCard, AuthContainer, AuthTitle } from "../../styles/auth-page.js";
import { Button, Form, Input } from "antd";
import { useNavigate, useLocation } from "react-router";
import api from "../../services/api.js";
import handleError from "../../utils/handle-error.js";

const FinishRegistration = () => {
  const {t} = useTranslation();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const {hash} = useLocation();

  useEffect(() => {
    if (hash) {
      localStorage.setItem('finish-token', hash);
    }
    if (!localStorage.getItem('finish-token')) {
      navigate("/");
    }
  }, []);

  const finish = async values => {
    const {password, passwordConfirmation} = values;
    if (password === passwordConfirmation) {
      await api.auth.updateUser({password: password}).then(handleError);
      localStorage.removeItem('finish-token');
      navigate("/law-office");
    }
  }

  return (
    <AuthContainer>
      {localStorage.getItem('finish-token') &&
        <AuthCard>
          <AuthTitle level={1}>{t("Header.finishRegistration")}</AuthTitle>
          <Form name="register" form={form} onFinish={finish} layout="vertical">
            <Form.Item label={t("User.password")} name="password">
              <Input.Password placeholder={t("User.password")}/>
            </Form.Item>
            <Form.Item label={t("User.passwordConfirmation")} name="passwordConfirmation">
              <Input.Password placeholder={t("User.passwordConfirmation")}/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">{t("Action.register")}</Button>
            </Form.Item>
          </Form>
        </AuthCard>
      }
    </AuthContainer>
  );
};

export default FinishRegistration;
