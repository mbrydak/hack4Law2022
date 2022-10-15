import { notification } from "antd";

export default function (response) {
  if (response?.error) {
      notification.open({
        message: response.error.message,
        type: 'error'
      });
      throw response.error;
    }
    return response;
}