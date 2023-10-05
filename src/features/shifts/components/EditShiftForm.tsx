import { Form, Input, FormInstance, DatePicker } from "antd";
import TextArea from "antd/es/input/TextArea";
const EditShiftForm = (props: { form: FormInstance }) => {
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY/MM/DD";
  return (
    <Form form={props.form}>
      <Form.Item name="title" label="이름" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="range" label="기간" rules={[{ required: true }]}>
        <RangePicker format={dateFormat} />
      </Form.Item>
      <Form.Item name="content" label="설명" rules={[{ required: true }]}>
        <TextArea />
      </Form.Item>
    </Form>
  );
};

export default EditShiftForm;
