import { Button, Card, FloatButton, List, Modal, Spin } from 'antd';
import { Schedule } from '..';
import { FolderAddTwoTone } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { AddShiftModal } from '../components/AddShiftModal';
import fetchScheduleList from '../api/fetchScheduleList';
import { useNavigate } from 'react-router-dom';

export const Shifts = () => {
  const dateFormat = 'YYYY-MM';
  const [scheduleList, setScheduleList] = useState([] as Schedule[]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSchedue, setSelectedSchedue] = useState({} as Schedule);
  const [isAddShiftModalOpen, setIsAddShiftModalOpen] = useState(false);
  const navigate = useNavigate();
  const showModal = (curtCchedule: Schedule) => {
    setSelectedSchedue(curtCchedule);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
  };

  const getScheduleList = async () => {
    const res = await fetchScheduleList();
    console.log(res);
  };

  const goDetailView = () => {
    navigate('/detail?param=value');
  };

  useEffect(() => {
    getScheduleList();
  }, []);

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
                    <h5 className='m-0 p-1'>{schedule.startDate}</h5>
                    <Spin spinning={!schedule.created} />
                  </div>
                }
                hoverable={true}
                onClick={() => showModal(schedule)}
              >
                <p>
                  {schedule.startDate} ~ {schedule.endDate}
                </p>
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
        title={dayjs(selectedSchedue.startDate).format(dateFormat)}
        open={isModalOpen}
        onCancel={handleOk}
        footer={[
          <div key='normal' className='flex justify-between'>
            <Button key='back' onClick={handleOk} type='dashed' danger>
              삭제
            </Button>
            <div className='flex'>
              <Button key='read' onClick={goDetailView}>
                상세조회
              </Button>
              <Button key='submit' type='primary' onClick={handleOk}>
                확인
              </Button>
            </div>
          </div>,
        ]}
      >
        {
          <>
            <p>
              {selectedSchedue.startDate} ~ {selectedSchedue.endDate}
            </p>
          </>
        }
      </Modal>
    </div>
  );
};
