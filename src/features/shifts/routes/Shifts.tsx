import { Card, List, Spin } from "antd";
import { schedule } from "..";

export const Shifts = () => {
  const scheduleList: schedule[] = [
    {
      id: "1",
      key: "key1",
      title: "Schedule 1",
      content: "Content for Schedule 1",
      startDate: "2023-10-01",
      endDate: "2023-10-02",
      created: false,
    },
    {
      id: "2",
      key: "key2",
      title: "Schedule 2",
      content: "Content for Schedule 2",
      startDate: "2023-10-03",
      endDate: "2023-10-04",
      created: true,
    },
    {
      id: "3",
      key: "key3",
      title: "Schedule 3",
      content: "Content for Schedule 3",
      startDate: "2023-10-05",
      endDate: "2023-10-06",
      created: true,
    },
    {
      id: "4",
      key: "key4",
      title: "Schedule 4",
      content: "Content for Schedule 4",
      startDate: "2023-10-07",
      endDate: "2023-10-08",
      created: true,
    },
    {
      id: "5",
      key: "key5",
      title: "Schedule 5",
      content: "Content for Schedule 5",
      startDate: "2023-10-09",
      endDate: "2023-10-10",
      created: true,
    },
    {
      id: "6",
      key: "key6",
      title: "Schedule 6",
      content: "Content for Schedule 6",
      startDate: "2023-10-11",
      endDate: "2023-10-12",
      created: true,
    },
  ];
  return (
    <div className="pt-4">
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
        renderItem={(item) => (
          <List.Item>
            <Card
              title={
                <div className="flex justify-between items-center pr-1">
                  <h5 className="m-0 p-1">item.title</h5>
                  <Spin spinning={!item.created} />
                </div>
              }
              hoverable={true}
            >
              <p>{item.content}</p>
              <p>
                {item.startDate} ~ {item.endDate}
              </p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
