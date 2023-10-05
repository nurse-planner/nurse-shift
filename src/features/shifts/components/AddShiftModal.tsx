import { DatePicker, Form, Input, Modal, Switch } from 'antd';
import addSchedule from '../api/addSchedule';
import TextArea from 'antd/es/input/TextArea';
import Swal from 'sweetalert2';
import { AddScheduleBodyType } from '..';

interface ChildProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

const dateFormat = 'YYYY-MM-DD';

const patternMapping = ['NOE', 'NOD', 'NON', 'EOD', 'DDDDD', 'DDDDE'];

export const AddShiftModal = ({ open, setOpen }: ChildProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  const onClickedAddShiftBtn = async () => {
    try {
      //const formData: EditScheduleForm = await editForm.validateFields();
      await addForm.validateFields();
      console.log(addForm.getFieldValue('startDate'));
      const paramData: AddScheduleBodyType = {
        title: addForm.getFieldValue('title'),
        content: addForm.getFieldValue('content'),
        startDate: addForm.getFieldValue('startDate').format(dateFormat),
        sleepingOff: addForm.getFieldValue('sleepingOff'),
        maxNurse: addForm.getFieldValue('maxNurse'),
        minNurse: addForm.getFieldValue('minNurse'),
        timeOut: addForm.getFieldValue('timeOut'),
        patterns: patternMapping.filter((pattern) =>
          addForm.getFieldValue(pattern)
        ),
      };
      try {
        await addSchedule(paramData);
        Swal.fire('Success', '근무표 생성 요청 성공!', 'success').then(() => {
          addForm.resetFields();
          setOpen(false);
        });
      } catch (e) {
        Swal.fire('Fail', '근무표 생성 요청 실패', 'error');
      }
    } catch (error) {
      // 유효성 검사 에러가 발생하면 여기로 들어옵니다.
      Swal.fire('Fail', '양식을 채워주세요!', 'error');
    } finally {
      //  setConfirmLoading(false);
    }
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
          name='startDate'
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
        <Form.Item name='sleepingOff' label='슬리핑 오프 부여 기준 N 근무수'>
          <Input type='number' />
        </Form.Item>
        <Form.Item name='timeOut' label='근무표 생성 최대 대기 시간(단위 : H)'>
          <Input type='number' />
        </Form.Item>
        <h2> 기피 패턴 설정</h2>
        <div className='grid grid-cols-3 gap-3'>
          {patternMapping.map((pattern) => (
            <Form.Item name={pattern} label={pattern} key={pattern}>
              <Switch />
            </Form.Item>
          ))}
        </div>
      </Form>
    </Modal>
  );
};
