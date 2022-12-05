import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Menu from "../../components/Menu";
import { Modal } from "../../components/Modal";
import { api } from "../../service/api";
import { Container } from "../Home/style";
import ListConatcts from "./ListContacts";
import Register from "./Register";
import { ThemeDashboard } from "./style";

interface IProps {
  autehenticated: boolean;
}

const Dashboard = ({ autehenticated }: IProps) => {
  const [reload, setReload] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [contactId, setContactId] = useState<string>("");
  const history = useHistory();
  const ref = useRef();

  if (!autehenticated) {
    history.push("/");
  }

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("@agenda:token") as string)}`,
        },
      })
      .catch(() => {
        localStorage.clear();
        window.location.reload();
      });
  }, []);

  return (
    <ThemeDashboard>
      <Menu />
      <Container>
        <Register reload={reload} setReload={setReload} />
      </Container>
      <ListConatcts reload={reload} setContactId={setContactId} setModal={setModal} />
      {modal && (
        <Modal
          reference={ref}
          modal={modal}
          setModal={setModal}
          reload={reload}
          setReload={setReload}
          title="Atualizar contato"
          url={`/contacts/${contactId}`}
        />
      )}
    </ThemeDashboard>
  );
};

export default Dashboard;
