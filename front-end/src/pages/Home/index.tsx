import { useHistory } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { ThemeHome } from "./style";

interface IProps {
  autehenticated: boolean;
  setAutehenticated: (e: boolean) => void;
}

const Home = ({ autehenticated, setAutehenticated }: IProps) => {
  const history = useHistory();

  if (autehenticated) {
    history.push("/dashboard");
  }

  return (
    <ThemeHome>
      <Login setAutehenticated={setAutehenticated} />
      <Register />
    </ThemeHome>
  );
};

export default Home;
