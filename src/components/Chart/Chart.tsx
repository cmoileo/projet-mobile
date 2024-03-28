import { LineChart } from "react-native-gifted-charts";
type Props = {
  data: any;
};
const Chart: React.FC<Props> = ({ data }) => {
  return (
    <LineChart
      data={data}
      thickness={2}
      yAxisColor="#3782FF"
      xAxisColor="#3782FF"
      color1="#3782FF"
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
