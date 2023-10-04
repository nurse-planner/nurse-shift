import { Form, Input, Select, FormInstance } from "antd";
import { Nurse } from "../types/index";

const NurseForm = (props: { nurse: Nurse | null; form: FormInstance }) => {
  const editNurse = props.nurse;

  return (
    <Form form={props.form}>
      <Form.Item name="id" label="Id" rules={[{ required: true }]}>
        <Input readOnly={editNurse != null ? true : false} />
      </Form.Item>
      <Form.Item name="name" label="이름" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="role" label="직급" rules={[{ required: true }]}>
        <Select
          options={[
            { value: 0, label: "Junior" },
            { value: 1, label: "Middle" },
            { value: 2, label: "Senior" },
          ]}
        ></Select>
      </Form.Item>
      <Form.Item name="dutyKeep" label="duty keep" rules={[{ required: true }]}>
        <Select
          options={[
            { value: 0, label: "없음" },
            { value: 1, label: "Day" },
            { value: 2, label: "Night" },
          ]}
        ></Select>
      </Form.Item>
      <Form.Item name="preceptorId" label="Preceptor">
        <Input />
      </Form.Item>
      <Form.Item
        name="isPregnant"
        label="임신 여부"
        rules={[{ required: true }]}
      >
        <Select
          options={[
            { value: false, label: "false" },
            { value: true, label: "true" },
          ]}
        ></Select>
      </Form.Item>
    </Form>
  );
};

export default NurseForm;
