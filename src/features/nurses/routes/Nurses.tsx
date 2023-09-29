import { Button, Card, Space, Table, Tag, Modal } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Nurse } from '../types/index';
import { useState, useEffect } from 'react';
import getNurses from '../api/getNurses';
import NurseForm from '../components/NurseForm';

export const Nurses = () => {
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
  const [nurseList, setNurseList] = useState([] as Nurse[]);
  const [selectedNurse, setSelectedNurse] = useState<Nurse | null>(null);
  const [editNurse, setEditNurse] = useState<Nurse | null>(null);
  const [openAddNurseModal, setOpenAddNurseModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Nurse[]) => {
      setSelectedNurse(selectedRows[0]);
      setEditNurse(selectedRows[0]);
    },
  };

  useEffect(() => {
    async function getNurseList() {
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
    }

    getNurseList();
  }, []);

  const showModal = () => {
    setOpenAddNurseModal(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenAddNurseModal(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpenAddNurseModal(false);
  };

  return (
    <div>
      <Space className='w-full'>
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
        />
        <div>
          <Button type='primary' onClick={showModal}>
            Add user
          </Button>
          <Card
            title={editNurse?.name}
            style={{ width: 300 }}
            actions={[
              <Button>delete</Button>,
              <Button>refresh</Button>,
              <Button>Save</Button>,
            ]}
          >
            <NurseForm nurse={editNurse} />
          </Card>
        </div>
      </Space>
      <Modal
        title='Title'
        open={openAddNurseModal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <NurseForm nurse={null} />
      </Modal>
    </div>
  );
};
