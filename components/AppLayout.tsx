import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import { Col, Input, Menu, Row } from 'antd';
import { getItem } from '@utils/getItem';

const AppLayout = ({ children }: PropsWithChildren<any>) => {
  const item = [
    getItem(<Link href="/">노드버드</Link>),
    getItem(<Link href="/profile">프로필</Link>),
    getItem(<Link href="/signup">회원가입</Link>),
    getItem(
      <Input.Search
        placeholder="input search text"
        style={{ width: 200, verticalAlign: 'middle' }}
      />
    ),
  ];

  return (
    <div>
      <Menu theme="dark" mode="horizontal" items={item}></Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          왼쪽 메뉴래
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

export default AppLayout;
