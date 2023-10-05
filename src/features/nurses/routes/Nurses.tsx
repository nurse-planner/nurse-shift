import { Button, Card, Table, Tag, Modal, Form } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Nurse, NurseFormType } from '../types/index';
import { useState, useEffect } from 'react';
import getNurses from '../api/getNurses';
import NurseForm from '../components/NurseForm';
import checkValidNurse from '../utils/checkValidNurse';
import addNurse from '../api/addNurse';
import deleteNurse from '../api/deleteNurse';
import patchNurse from '../api/editNurse';
import Swal from 'sweetalert2';

const roleArray = ['Junior', 'Middle', 'Senior'];
const columns: ColumnsType<Nurse> = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '임신 여부',
    dataIndex: 'isPregnant',
    key: 'isPregnant',
    render: (value: boolean) => <div> {value ? '○' : 'X'}</div>,
  },
  {
    title: '직급',
    key: 'role',
    dataIndex: 'role',
    render: (value: number) => <div>{roleArray[value]}</div>,
  },
  {
    title: 'duty keep',
    key: 'action',
    render: (value: Nurse) => {
      switch (value.dutyKeep) {
        case 0:
          break;
        case 1:
          return <Tag color='orange'>Day</Tag>;
        case 2:
          return <Tag color='blue'>Night</Tag>;
      }
    },
  },
];

const convertStringToArray = (input: string | undefined): string[] => {
  if (input != undefined && input.length > 0) {
    return input.split(',').map((s) => s.trim());
  } else {
    return [];
  }
};

const convertArrayToString = (input: string[]): string => {
  return input.join(', ');
};

export const Nurses = () => {
  const [nurseList, setNurseList] = useState([] as Nurse[]);
  const [selectedNurse, setSelectedNurse] = useState<Nurse | null>(null);
  const [editNurse, setEditNurse] = useState<Nurse | null>(null);
  const [openAddNurseModal, setOpenAddNurseModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const rowSelection = {
    onChange: (_: React.Key[], selectedRows: Nurse[]) => {
      setSelectedNurse(selectedRows[0]);
      setEditNurse(selectedRows[0]);
    },
  };

  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();
  const fetchNurseList = async () => {
    try {
      const res: Nurse[] = await getNurses();
      setNurseList(res);
      if (res.length > 0) {
        setSelectedNurse(res[0]);
        setEditNurse(res[0]);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    if (editNurse) {
      editForm.setFieldsValue(editNurse);
      editForm.setFieldValue('off', convertArrayToString(editNurse.offs));
      editForm.setFieldValue('rest', convertArrayToString(editNurse.rests));
    } else {
      editForm.resetFields(); // editNurse가 null이면 폼 필드를 초기화합니다.
    }
  }, [editNurse]);

  useEffect(() => {
    fetchNurseList();
  }, []);

  const showModal = () => {
    setOpenAddNurseModal(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    try {
      const formData: NurseFormType = await addForm.validateFields();
      const validCheckRes = checkValidNurse(nurseList, formData, true);
      if (validCheckRes.success) {
        const newNurse: Nurse = {
          id: '',
          key: '',
          name: formData.name,
          isPregnant: formData.isPregnant,
          role: formData.role,
          dutyKeep: formData.dutyKeep,
          preceptorId: formData.preceptorId,
          offs: convertStringToArray(formData.off),
          rests: convertStringToArray(formData.rest),
        };
        try {
          await addNurse(newNurse);
          setOpenAddNurseModal(false);
          setConfirmLoading(false);
          Swal.fire('Success', '간호사 추가 성공!', 'success');
        } catch (e) {
          Swal.fire('Error', '간호사 추가 실패', 'error');
        }

        addForm.resetFields();
        await fetchNurseList();
      } else {
        window.alert(validCheckRes.msg);
      }
    } catch (error) {
      // 유효성 검사 에러가 발생하면 여기로 들어옵니다.
      console.error('Validation failed:', error);
      window.alert('양식을 채워주세요.');
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpenAddNurseModal(false);
  };

  const onClickDeleteBtn = async () => {
    setDeleteLoading(true);
    try {
      if (editNurse != null) {
        await deleteNurse(editNurse.id);
        await fetchNurseList();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setDeleteLoading(false);
    }
  };

  const onClickRefreshBtn = () => {
    editForm.setFieldsValue(editNurse);
  };

  const onClickConfirmEditBtn = async () => {
    try {
      const formData: NurseFormType = await editForm.validateFields();
      const validCheckRes = checkValidNurse(nurseList, formData, false);
      if (validCheckRes.success && editNurse != null) {
        const newNurse: Nurse = {
          id: editNurse.id,
          key: '',
          name: formData.name,
          isPregnant: formData.isPregnant,
          role: formData.role,
          dutyKeep: formData.dutyKeep,
          preceptorId: formData.preceptorId,
          offs: convertStringToArray(formData.off),
          rests: convertStringToArray(formData.rest),
        };
        await patchNurse(newNurse);
        Swal.fire('Success', '간호사 수정 성공!', 'success');
        editForm.resetFields();
        await fetchNurseList();
      } else {
        Swal.fire('Fail', validCheckRes.msg, 'error');
      }
    } catch (error) {
      // 유효성 검사 에러가 발생하면 여기로 들어옵니다.
      console.error('Validation failed:', error);
      Swal.fire('Fail', '양식을 채워주세요!', 'error');
    } finally {
      setConfirmLoading(false);
    }
  };
  return (
    <div className='pt-4'>
      <Button type='primary' onClick={showModal} className='w-28 mb-4'>
        간호사 추가
      </Button>
      <div className='flex justify-around'>
        <Table
          columns={columns}
          dataSource={nurseList}
          rowSelection={{
            type: 'radio',
            selectedRowKeys: [selectedNurse != null ? selectedNurse.key : ''],
            ...rowSelection,
          }}
          pagination={{
            pageSize: 10,
          }}
          className='w-9/12'
        />
        <div className='flex flex-col items-end'>
          <Card
            title={editNurse?.name}
            style={{ width: 300 }}
            actions={[
              <Button loading={deleteLoading} onClick={onClickDeleteBtn}>
                delete
              </Button>,
              <Button onClick={onClickRefreshBtn}>refresh</Button>,
              <Button onClick={onClickConfirmEditBtn}>Save</Button>,
            ]}
          >
            <NurseForm nurse={editNurse} form={editForm} />
          </Card>
        </div>
      </div>
      <Modal
        title='간호사 생성'
        open={openAddNurseModal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <NurseForm nurse={null} form={addForm} />
      </Modal>
    </div>
  );
};
