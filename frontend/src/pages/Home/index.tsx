import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Login from "./Login";
import Register from "./Register";
import { Container, ThemeHome } from "./style";

interface IProps {
  autehenticated: boolean;
  setAutehenticated: (e: boolean) => void;
}

const Home = ({ autehenticated, setAutehenticated }: IProps) => {
  const [login, setLogin] = useState<boolean>(true);
  const history = useHistory();

  if (autehenticated) {
    history.push("/dashboard");
  }

  return (
    <ThemeHome>
      <Container formActive={login}>
        <div className="buttons">
          <Button type="button" text="Login" onClick={() => setLogin(true)} />
          <Button type="button" text="Registro" onClick={() => setLogin(false)} />
        </div>
        {login ? <Login setAutehenticated={setAutehenticated} /> : <Register setLogin={setLogin} />}
      </Container>
    </ThemeHome>
  );
};

export default Home;
