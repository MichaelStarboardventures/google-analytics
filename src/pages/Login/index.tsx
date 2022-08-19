import {
  ProForm,
  ProFormCheckbox,
  ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { useRef } from 'react';

const Login = () => {
  const formRef = useRef<ProFormInstance>();

  return (
    <ProForm
      style={{ width: 500, margin: '0 auto' }}
      formRef={formRef}
      onFinish={async (formData) => {
        gtag('event', 'login', {
          ...formData,
        });
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
      <ProFormText.Password
        name={'password'}
        label={'密码'}
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
  );
};

export default Login;
