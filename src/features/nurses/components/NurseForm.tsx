import { Form, Input, Select, FormInstance } from 'antd';
import { Nurse } from '../types/index';
import TextArea from 'antd/es/input/TextArea';

const NurseForm = (props: { nurse: Nurse | null; form: FormInstance }) => {
  return (
    <Form form={props.form}>
      <Form.Item name='name' label='이름' rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='role' label='직급' rules={[{ required: true }]}>
        <Select
          options={[
            { value: 0, label: '신입' },
            { value: 1, label: 'Junior' },
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
      <Form.Item name='preceptorId' label='Preceptor'>
        <Input />
      </Form.Item>
      <Form.Item name='workingYear' label='연차' rules={[{ required: true }]}>
        <Input type='number' />
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
      <p>
        OFF와 휴가 신청 입력은 YYYY-MM-DD 형식으로 ','로 구분지어 입력해주세요.
      </p>
      <Form.Item name='off' label='OFF 신청'>
        <TextArea className='border-1' />
      </Form.Item>
      <Form.Item name='rest' label='휴가 신청'>
        <TextArea />
      </Form.Item>
    </Form>
  );
};

export default NurseForm;
