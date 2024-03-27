import { BarChart } from "react-native-gifted-charts";
type Props = {
  data: any;
};
const ChartWeight: React.FC<Props> = ({ data }) => {
  return <BarChart data={data} />;
};

export default ChartWeight;
