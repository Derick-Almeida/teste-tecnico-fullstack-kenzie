import { useRef, useState } from "react";
import { api } from "../../service/api";
import Button from "../Button";
import { Modal } from "../Modal";
import { ThemeMenu } from "./style";

const Menu = () => {
  const [reload, setReload] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [form, setForm] = useState<string>("form");

  const ref = useRef();

  const deleteAccount = () => {
    api
      .delete("/profile", {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("@agenda:token") as string)}`,
        },
      })
      .then(() => {
        localStorage.clear();
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeMenu>
      <p onClick={() => setModal(true)}>Perfil</p>
      {modal && form === "form" && (
        <Modal
          reference={ref}
          modal={modal}
          setModal={setModal}
          reload={reload}
          setReload={setReload}
          title="Atualizar perfil"
          url="/profile"
        />
      )}
      {modal && form === "remove" && (
        <Modal
          reference={ref}
          modal={modal}
          setModal={setModal}
          reload={reload}
          setReload={setReload}
          form={false}
          title="Tem certeza que deseja excluir a conta permanentemente ?"
          callback={deleteAccount}
        />
      )}
      <p
        onClick={() => {
          setModal(true);
          setForm("remove");
        }}
      >
        Deletar conta
      </p>
      <Button text="Sair" onClick={() => setModal(true)} />
    </ThemeMenu>
  );
};

export default Menu;
