import { useHistory } from "react-router-dom";
import Register from "./Register";
import { ThemeDashboard } from "./style";

interface IProps {
  autehenticated: boolean;
}

const Dashboard = ({ autehenticated }: IProps) => {
  const history = useHistory();

  if (!autehenticated) {
    history.push("/");
  }

  return (
    <ThemeDashboard>
      <Register />
    </ThemeDashboard>
  );
};

export default Dashboard;
