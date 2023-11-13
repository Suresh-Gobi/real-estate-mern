import React from "react";
import { Button, Card, Form, Input, Typography } from "antd";

const { Text } = Typography;

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card
        title={<h1 className="text-2xl">Signup</h1>}
        className="w-full max-w-xl p-2 rounded-lg shadow-md"
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            labelAlign="left" // Left-align the label text
          >
            <Input className="w-full" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
            labelAlign="left" // Left-align the label text
          >
            <Input className="w-full" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            labelAlign="left" // Left-align the label text
          >
            <Input.Password className="w-full" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 hover:bg-blue-700"
            >
              Signup
            </Button>
          </Form.Item>
        </Form>
        <hr/>
        <Text className="flex items-center justify-center pt-5">
          Already have an account? <a href="/Signin"> Sign-in</a>
        </Text>
      </Card>
    </div>
  );
}
