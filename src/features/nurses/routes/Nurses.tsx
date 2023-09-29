import { Button, Card, Form, Input, Select, Space, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Nurse } from '../types/index';
import { useState, useEffect } from 'react';
import getNurses from '../api/getNurses';

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

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Nurse[]) => {
      setSelectedNurse(selectedRows[0]);
      setEditNurse(selectedRows[0]);
    },
  };

  useEffect(() => {
    async function getNurseList() {
      const res = await getNurses();
      console.log(res);
    }

    getNurseList();
  }, []);

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
          <Button type='primary'>Add user</Button>
          <Card
            title={editNurse?.name}
            style={{ width: 300 }}
            actions={[
              <Button>delete</Button>,
              <Button>refresh</Button>,
              <Button>Save</Button>,
            ]}
          >
            <Form initialValues={editNurse != null ? editNurse : undefined}>
              <Form.Item name='key' label='Id'>
                <Input readOnly value={editNurse?.key} />
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
              <Form.Item
                name='dutyKeep'
                label='duty keep'
                rules={[{ required: true }]}
              >
                <Select
                  options={[
                    { value: 0, label: '없음' },
                    { value: 1, label: 'Day' },
                    { value: 2, label: 'Night' },
                  ]}
                ></Select>
              </Form.Item>
              <Form.Item
                name='preseptorId'
                label='Preseptor'
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
          </Card>
        </div>
      </Space>
    </div>
  );
};
