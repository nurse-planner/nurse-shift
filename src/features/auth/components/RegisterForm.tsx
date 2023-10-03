import { Button, Form, Input } from "antd";
import { registerWithEmailAndPassword } from "../api/register";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
type FieldType = {
  email: string;
  password: string;
  //   remember?: string;
};

export function RegisterForm() {
  const navigate = useNavigate();
  const onFinish = async (values: FieldType) => {
    try {
      await registerWithEmailAndPassword(values);
      Swal.fire("Good job!", "회원가입에 성공하였습니다.", "success").then(
        () => {
          navigate("/nurse-shift/auth/login");
        }
      );
    } catch (err) {
      Swal.fire("Error!", "회원가입에 실패하였습니다.", "error");
    }
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

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
          Already registered?{" "}
          <a
            href="/nurse-shift/auth/login"
            className="text-blue-500 hover:text-blue-700"
          >
            login
          </a>
        </p>
      </Form.Item>
    </Form>
  );
}
