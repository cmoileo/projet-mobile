import { LineChart } from "react-native-gifted-charts";

const Chart = () => {
  const data = [
    {
      value: 0,
      label: "1",
    },
    {
      value: 10,
      label: "2",
    },
    {
      value: 12,
      label: "3",
    },
    {
      value: 23,
      label: "4",
    },
    {
      value: 39,
      label: "5",
    },
    {
      value: 53,
      label: "6",
    },
  ];
  const data2 = [
    {
      value: 115,
      label: "1",
    },
    {
      value: 110,
      label: "2",
    },
    {
      value: 124,
      label: "3",
    },
    {
      value: 98,
      label: "4",
    },
    {
      value: 60,
      label: "5",
    },
    {
      value: 100,
      label: "6",
    },
  ];
  const data3 = [
    {
      value: 10,
      label: "1",
    },
    {
      value: 45,
      label: "2",
    },
    {
      value: 30,
      label: "3",
    },
    {
      value: 40,
      label: "4",
    },
    {
      value: 20,
      label: "5",
    },
    {
      value: 15,
      label: "6",
    },
  ];
  return (
    <LineChart
      data={data2}
      data2={data}
      data3={data3}
      thickness={2}
      yAxisColor="#3782FF"
      xAxisColor="#3782FF"
      color1="#0060FF"
      color2="#FF0000"
      showVerticalLines
      dataPointsColor1="#3782FF"
      dataPointsColor2="#3782FF"
      dataPointsHeight={5}
      dataPointsWidth={5}
      yAxisIndicesColor="#3782FF"
      xAxisIndicesColor="#3782FF"
    />
  );
};

export default Chart;
