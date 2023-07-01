import React from 'react';
import { Button, Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';

interface UserProfileProps {
  onLogout: () => void;
}

const UserProfile = ({ onLogout }: UserProfileProps) => {
  return (
    <Card
      actions={[
        <EditOutlined key="edit" />,
        <div key="followers">
          followers
          <br />0
        </div>,
        <div key="following">
          following
          <br />0
        </div>,
      ]}
    >
      <Card.Meta description="머지입니다." title="머지" />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
