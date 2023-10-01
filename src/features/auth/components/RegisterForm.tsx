import { Button, Form, Input } from "antd";
import { registerWithEmailAndPassword } from "../api/register";

type FieldType = {
  email: string;
  password: string;
  //   remember?: string;
};

const onFinish = async (values: FieldType) => {
  await registerWithEmailAndPassword(values);
};

const onFinishFailed = (errorInfo: unknown) => {
  console.log("Failed:", errorInfo);
};

export function RegisterForm() {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="UserEmail"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      {/* 
      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button className="bg-blue-500" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
