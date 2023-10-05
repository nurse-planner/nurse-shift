import { Button, Card, FloatButton, List, Modal, Spin, Form } from 'antd';
import { EditScheduleFormType, Schedule } from '..';
import { FolderAddTwoTone } from '@ant-design/icons';
import { useState } from 'react';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import EditShiftForm from '../components/EditShiftForm';
import { AddShiftModal } from '../components/AddShiftModal';
export const Shifts = () => {
  const dateFormat = 'YYYY/MM/DD';
  const scheduleList: Schedule[] = [
    {
      id: '1',
      key: 'key1',
      title: 'Schedule 1',
      content: 'Content for Schedule 1',
      startDate: '2023/10/01',
      endDate: '2023/10/02',
      created: false,
    },
    {
      id: '2',
      key: 'key2',
      title: 'Schedule 2',
      content: 'Content for Schedule 2',
      startDate: '2023/10/03',
      endDate: '2023/10/04',
      created: true,
    },
    {
      id: '3',
      key: 'key3',
      title: 'Schedule 3',
      content: 'Content for Schedule 3',
      startDate: '2023/10/05',
      endDate: '2023/10/06',
      created: true,
    },
    {
      id: '4',
      key: 'key4',
      title: 'Schedule 4',
      content: 'Content for Schedule 4',
      startDate: '2023/10/07',
      endDate: '2023/10/08',
      created: true,
    },
    {
      id: '5',
      key: 'key5',
      title: 'Schedule 5',
      content: 'Content for Schedule 5',
      startDate: '2023/10/09',
      endDate: '2023/10/10',
      created: true,
    },
    {
      id: '6',
      key: 'key6',
      title: 'Schedule 6',
      content: 'Content for Schedule 6',
      startDate: '2023/10/11',
      endDate: '2023/10/12',
      created: true,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSchedue, setSelectedSchedue] = useState({} as Schedule);
  const [editMode, setEditMode] = useState(false);
  const [editForm] = Form.useForm();
  const [isAddShiftModalOpen, setIsAddShiftModalOpen] = useState(false);

  const showModal = (curtCchedule: Schedule) => {
    setSelectedSchedue(curtCchedule);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    // setIsModalOpen(false);
    if (editMode) {
      try {
        //const formData: EditScheduleForm = await editForm.validateFields();
        await editForm.validateFields();
        try {
          //await patchSchedule(formData);
          Swal.fire('Success', '근무표 수정 성공!', 'success').then(() => {
            editForm.resetFields();
            //await fetchScheduleList();
            setEditMode(false);
            setIsModalOpen(false);
          });
        } catch (e) {
          Swal.fire('Fail', '근무표 수정 실패', 'error');
        }
      } catch (error) {
        // 유효성 검사 에러가 발생하면 여기로 들어옵니다.
        console.error('Validation failed:', error);
        Swal.fire('Fail', '양식을 채워주세요!', 'error');
      } finally {
        //  setConfirmLoading(false);
      }
    } else {
      setIsModalOpen(false);
    }
  };

  const handleEditCancel = () => {
    setEditMode(false);
  };

  const handleEditMode = () => {
    setEditMode(true);
    const editData: EditScheduleFormType = {
      id: selectedSchedue.id,
      title: selectedSchedue.title,
      content: selectedSchedue.content,
      range: [
        dayjs(selectedSchedue.startDate, dateFormat),
        dayjs(selectedSchedue.endDate, dateFormat),
      ],
    };
    editForm.setFieldsValue(editData);
  };

  return (
    <div className='pt-4'>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 5,
          xxl: 4,
        }}
        dataSource={scheduleList}
        renderItem={(schedule) => (
          <>
            <List.Item>
              <Card
                title={
                  <div className='flex justify-between items-center pr-1'>
                    <h5 className='m-0 p-1'>{schedule.title}</h5>
                    <Spin spinning={!schedule.created} />
                  </div>
                }
                hoverable={true}
                onClick={() => showModal(schedule)}
              >
                <p>
                  {schedule.startDate} ~ {schedule.endDate}
                </p>
                <p>{schedule.content}</p>
              </Card>
            </List.Item>
          </>
        )}
      />
      <FloatButton
        icon={<FolderAddTwoTone />}
        type='primary'
        onClick={() => setIsAddShiftModalOpen(true)}
      />
      <AddShiftModal
        open={isAddShiftModalOpen}
        setOpen={setIsAddShiftModalOpen}
      />
      <Modal
        title={selectedSchedue.title}
        open={isModalOpen}
        onCancel={handleOk}
        footer={[
          editMode ? (
            <div key='editmode'>
              <Button key='editBack' onClick={handleEditCancel}>
                취소
              </Button>
              <Button key='editSubmit' type='primary' onClick={handleOk}>
                확인
              </Button>
            </div>
          ) : (
            <div key='normal' className='flex justify-between'>
              <Button key='back' onClick={handleOk} type='dashed' danger>
                삭제
              </Button>
              <div className='flex'>
                <Button key='edit' onClick={handleEditMode}>
                  수정
                </Button>
                <Button key='read' onClick={handleOk}>
                  상세조회
                </Button>
                <Button key='submit' type='primary' onClick={handleOk}>
                  확인
                </Button>
              </div>
            </div>
          ),
        ]}
      >
        {editMode ? (
          <EditShiftForm form={editForm} />
        ) : (
          <>
            <p>
              {selectedSchedue.startDate} ~ {selectedSchedue.endDate}
            </p>
            <p>{selectedSchedue.content}</p>
          </>
        )}
      </Modal>
    </div>
  );
};
