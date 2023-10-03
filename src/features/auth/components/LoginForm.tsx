import { Button, Form, Input } from "antd";
import { loginWithEmailAndPassword } from "../api/loginUser";

type FieldType = {
  email: string;
  password: string;
  //   remember?: string;
};

const onFinish = async (values: FieldType) => {
  await loginWithEmailAndPassword(values);
};

const onFinishFailed = (errorInfo: unknown) => {
  console.log("Failed:", errorInfo);
};

export function LoginForm() {
  return (
    <Form
      name="basic"
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please input your email!",
          },
        ]}
      >
        <Input placeholder="email" />
      </Form.Item>

      <Form.Item<FieldType>
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="password" />
      </Form.Item>

      <Form.Item>
        <Button className="bg-blue-500 w-full" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Form.Item>
        <p className="text-gray-400 w-full text-center">
          Not registered?{" "}
          <a
            href="/nurse-shift/auth/register"
            className="text-blue-500 hover:text-blue-700"
          >
            Create an account
          </a>
        </p>
      </Form.Item>
    </Form>
  );
}
