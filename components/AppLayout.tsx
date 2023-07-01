import React, { PropsWithChildren, useState } from 'react';
import Link from 'next/link';
import { Col, Input, Menu, Row } from 'antd';
import { getItem } from '@utils/getItem';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const AppLayout = ({ children }: PropsWithChildren<any>) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const item = [
    getItem(<Link href="/">노드버드</Link>),
    getItem(<Link href="/profile">프로필</Link>),
    getItem(<Link href="/signup">회원가입</Link>),
    getItem(<SearchInput placeholder="input search text" />),
  ];

  return (
    <div>
      <Menu theme="dark" mode="horizontal" items={item}></Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.naver.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            NAVER
          </a>
        </Col>
      </Row>
    </div>
  );
};

const SearchInput = styled(Input.Search)`
  width: 200px;
  vertical-align: middle;
`;

export default AppLayout;
