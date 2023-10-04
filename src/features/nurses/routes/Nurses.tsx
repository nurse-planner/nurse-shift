import { Button, Card, Space, Table, Tag, Modal, Form } from "antd";
import { ColumnsType } from "antd/es/table";
import { Nurse } from "../types/index";
import { useState, useEffect } from "react";
import getNurses from "../api/getNurses";
import NurseForm from "../components/NurseForm";
import checkValidNurse from "../utils/checkValidNurse";
import addNurse from "../api/addNurse";
import deleteNurse from "../api/deleteNurse";
import Swal from "sweetalert2";

export const Nurses = () => {
  const roleArray = ["Junior", "Middle", "Senior"];
  const columns: ColumnsType<Nurse> = [
    {
      title: "Id",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "임신 여부",
      dataIndex: "isPregnant",
      key: "isPregnant",
      render: (value: boolean) => <div> {value ? "○" : "X"}</div>,
    },
    {
      title: "직급",
      key: "role",
      dataIndex: "role",
      render: (value: number) => <div>{roleArray[value]}</div>,
    },
    {
      title: "duty keep",
      key: "action",
      render: (value: Nurse) => {
        switch (value.dutyKeep) {
          case 0:
            break;
          case 1:
            return <Tag color="orange">Day</Tag>;
          case 2:
            return <Tag color="blue">Night</Tag>;
        }
      },
    },
  ];
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
    const formData = addForm.getFieldsValue();
    console.log(formData);
    try {
      const formData: Nurse = await addForm.validateFields();
      const validCheckRes = checkValidNurse(nurseList, formData, true);
      if (validCheckRes.success) {
        await addNurse(formData);
        setOpenAddNurseModal(false);
        setConfirmLoading(false);
        Swal.fire("Success", "간호사 추가 성공!", "success");
        addForm.resetFields();
        await fetchNurseList();
      } else {
        window.alert(validCheckRes.msg);
      }
    } catch (error) {
      // 유효성 검사 에러가 발생하면 여기로 들어옵니다.
      console.error("Validation failed:", error);
      window.alert("양식을 채워주세요.");
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
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

  return (
    <div>
      <Space className="w-full">
        <Table
          columns={columns}
          dataSource={nurseList}
          rowSelection={{
            type: "radio",
            selectedRowKeys: [selectedNurse != null ? selectedNurse.key : ""],
            ...rowSelection,
          }}
          pagination={{
            pageSize: 10,
          }}
        />
        <div>
          <Button type="primary" onClick={showModal}>
            Add user
          </Button>
          <Card
            title={editNurse?.name}
            style={{ width: 300 }}
            actions={[
              <Button loading={deleteLoading} onClick={onClickDeleteBtn}>
                delete
              </Button>,
              <Button>refresh</Button>,
              <Button>Save</Button>,
            ]}
          >
            <NurseForm nurse={editNurse} form={editForm} />
          </Card>
        </div>
      </Space>
      <Modal
        title="간호사 생성"
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
