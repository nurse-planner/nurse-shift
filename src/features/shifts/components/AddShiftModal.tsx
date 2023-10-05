import { DatePicker, Form, Input, Modal, Switch } from 'antd';
import addShift from '../api/addShift';
import TextArea from 'antd/es/input/TextArea';

interface ChildProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

const dateFormat = 'YYYY-MM-DD';

export const AddShiftModal = ({ open, setOpen }: ChildProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  const onClickedAddShiftBtn = async () => {
    await addShift();
  };

  const [addForm] = Form.useForm();

  return (
    <Modal
      title='근무표 생성'
      open={open}
      onOk={onClickedAddShiftBtn}
      onCancel={handleClose}
    >
      <Form form={addForm}>
        <Form.Item
          name='title'
          label='근무표 이름'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='start Date'
          label='근무 시작일'
          rules={[{ required: true }]}
        >
          <DatePicker format={dateFormat} />
        </Form.Item>
        <Form.Item name='content' label='설명' rules={[{ required: true }]}>
          <TextArea />
        </Form.Item>
        <Form.Item
          name='maxNurse'
          label='한 근무당 최대 간호사 수'
          rules={[{ required: true }]}
        >
          <Input type='number' />
        </Form.Item>
        <Form.Item
          name='minNurse'
          label='한 근무당 최소 간호사 수'
          rules={[{ required: true }]}
        >
          <Input type='number' />
        </Form.Item>
        <Form.Item
          name='minNurse'
          label='근무표 생성 최대 대기 시간(단위 : H)'
          rules={[{ required: true }]}
        >
          <Input type='number' />
        </Form.Item>
        <h2> 기피 패턴 설정</h2>
        <div className='grid grid-cols-3 gap-3'>
          <Form.Item name='NOE' label='NOE'>
            <Switch />
          </Form.Item>
          <Form.Item name='NOD' label='NOD'>
            <Switch />
          </Form.Item>
          <Form.Item name='NON' label='NON'>
            <Switch />
          </Form.Item>
          <Form.Item name='EOD' label='EOD'>
            <Switch />
          </Form.Item>
          <Form.Item name='DDDDD' label='DDDDD'>
            <Switch />
          </Form.Item>
          <Form.Item name='DDDDE' label='DDDDE'>
            <Switch />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};
