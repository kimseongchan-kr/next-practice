import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import Link from 'next/link';

interface LoginFormProps {
  onFinish: () => void;
}

const LoginForm = ({ onFinish }: LoginFormProps) => {
  return (
    <>
      <Form onFinish={onFinish}>
        <Form.Item>
          <Typography.Text>아이디</Typography.Text>
          <Input />
        </Form.Item>
        <Form.Item>
          <Typography.Text>비밀번호</Typography.Text>
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">로그인</Button>
        </Form.Item>
      </Form>
      <div>
        <Typography.Text>처음 오셨나요?</Typography.Text>
        <Link href="/signup"> 계정 만들기</Link>
      </div>
    </>
  );
};

export default LoginForm;
