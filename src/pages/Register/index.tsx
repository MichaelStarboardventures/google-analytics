import {
  ModalForm,
  ProForm,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import { useState } from 'react';
import { history } from 'umi';

const Register = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <ProForm
        style={{ width: 500, margin: '0 auto' }}
        onFinish={async (field) => {
          gtag('event', 'register', {
            ...field,
          });

          setVisible(true);
        }}
        onFieldsChange={(changedFields) => {
          const { value } = changedFields[0];

          gtag('event', 'degree_click', { degree: value });
        }}
      >
        <ProFormText
          name={'userName'}
          label={'用户名'}
          placeholder={'请输入用户名'}
          rules={[
            {
              required: true,
            },
          ]}
        />
        <ProFormText
          name={'password'}
          label={'密码'}
          placeholder={'请输入密码'}
          rules={[
            {
              required: true,
            },
          ]}
        />
        <ProFormText
          name={'confirm_password'}
          label={'确认密码'}
          placeholder={'请输入密码'}
          rules={[
            {
              required: true,
            },
          ]}
        />
        <ProFormCheckbox
          name={'degree'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          同意承诺书
        </ProFormCheckbox>
      </ProForm>
      <ModalForm
        title={'人机交互'}
        visible={visible}
        onFinish={async () => {
          setVisible(false);

          history.push('/login');
        }}
      >
        <Button
          type={'primary'}
          onClick={() => {
            gtag('event', 'google_slider', {
              referrer: document.referrer,
            });
          }}
        >
          人机
        </Button>
      </ModalForm>
    </>
  );
};

export default Register;
