import { Button, Card, Form, Input, Select, Space, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Nurse } from '../types/index';
import { useState } from 'react';

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
  const nurseList: Nurse[] = [
    {
      key: '1',
      name: 'Florence Nightingale',
      dutyKeep: 2,
      isPregnant: false,
      preseptorId: '2',
      role: 0,
    },
    {
      key: '2',
      name: 'Clara Barton',
      dutyKeep: 1,
      isPregnant: false,
      preseptorId: null,
      role: 0,
    },
    {
      key: '3',
      name: 'Virginia Henderson',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 0,
    },
    {
      key: '4',
      name: 'Dorothea Orem',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 0,
    },
    {
      key: '5',
      name: 'Margaret Sanger',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 0,
    },
    {
      key: '6',
      name: 'Mary Mahoney',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 0,
    },
    {
      key: '7',
      name: 'Martha Rogers',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 0,
    },
    {
      key: '8',
      name: 'Mary Breckinridge',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 0,
    },
    {
      key: '9',
      name: 'Christiane Reimann',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 0,
    },
    {
      key: '10',
      name: 'Hazel W. Johnson-Brown',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 0,
    },
    {
      key: '11',
      name: 'Edith Cavell',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 1,
    },
    {
      key: '12',
      name: 'Mary Eliza Mahoney',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 1,
    },
    {
      key: '13',
      name: 'Mary Adelaide Nutting',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 1,
    },
    {
      key: '14',
      name: 'Linda Richards',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 1,
    },
    {
      key: '15',
      name: 'Lillian Wald',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 1,
    },
    {
      key: '16',
      name: 'Helen Fairchild',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 1,
    },
    {
      key: '17',
      name: 'Vera Brittain',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 1,
    },
    {
      key: '18',
      name: 'Claire Bertschinger',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 1,
    },
    {
      key: '19',
      name: 'Kate Cumming',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 1,
    },
    {
      key: '20',
      name: 'Agnes Jones',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 1,
    },
    {
      key: '21',
      name: 'Ann Marie Rafferty',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 2,
    },
    {
      key: '22',
      name: 'Sarah Emma Edmonds',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 2,
    },
    {
      key: '23',
      name: 'Annie Goodrich',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 2,
    },
    {
      key: '24',
      name: 'Louisa Parsons',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 2,
    },
    {
      key: '25',
      name: 'Sophie Mannerheim',
      dutyKeep: 0,
      isPregnant: false,
      preseptorId: null,
      role: 2,
    },
    {
      key: '26',
      name: 'Nola Fox',
      dutyKeep: 0,
      isPregnant: true,
      preseptorId: null,
      role: 2,
    },
  ];
  const [selectedNurse, setSelectedNurse] = useState<Nurse | null>(
    nurseList[0]
  );
  const [editNurse, setEditNurse] = useState<Nurse | null>(nurseList[0]);

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Nurse[]) => {
      setSelectedNurse(selectedRows[0]);
      setEditNurse(selectedRows[0]);
    },
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
          <Button type='primary'>Add user</Button>
          <Card
            title={editNurse?.name}
            style={{ width: 300 }}
            actions={[<Button>Save changes</Button>]}
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
