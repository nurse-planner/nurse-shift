import { Form, Input, Select } from 'antd';
import { Nurse } from '../types/index';
import { useEffect } from 'react';

const NurseForm = (props: { nurse: Nurse | null }) => {
  const editNurse = props.nurse;
  console.log(editNurse);
  const [form] = Form.useForm();
  useEffect(() => {
    if (editNurse) {
      form.setFieldsValue(editNurse);
    } else {
      form.resetFields(); // editNurse가 null이면 폼 필드를 초기화합니다.
    }
  }, [editNurse]);

  return (
    <Form form={form}>
      <Form.Item name='key' label='ID'>
        <Input readOnly={editNurse != null ? true : false} />
      </Form.Item>
      <Form.Item name='role' label='직급' rules={[{ required: true }]}>
        <Select
          options={[
            { value: 0, label: 'Junior' },
            { value: 1, label: 'Middle' },
            { value: 2, label: 'Senior' },
          ]}
        ></Select>
      </Form.Item>
      <Form.Item name='dutyKeep' label='duty keep' rules={[{ required: true }]}>
        <Select
          options={[
            { value: 0, label: '없음' },
            { value: 1, label: 'Day' },
            { value: 2, label: 'Night' },
          ]}
        ></Select>
      </Form.Item>
      <Form.Item
        name='preceptorId'
        label='Preceptor'
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='isPregnant'
        label='임신 여부'
        rules={[{ required: true }]}
      >
        <Select
          options={[
            { value: false, label: 'false' },
            { value: true, label: 'true' },
          ]}
        ></Select>
      </Form.Item>
    </Form>
  );
};

export default NurseForm;
