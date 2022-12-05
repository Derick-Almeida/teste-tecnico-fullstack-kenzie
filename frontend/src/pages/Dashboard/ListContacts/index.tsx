import { useEffect, useState } from "react";
import { api } from "../../../service/api";
import { ThemeList } from "../style";
import Card from "./card";

interface IContact {
  id: string;
  fullName: string;
  emails: string[];
  phones: string[];
}

interface IProps {
  reload: boolean;
  setModal: (e: boolean) => void;
  setContactId: (e: string) => void;
}

const ListConatcts = ({ reload, setModal, setContactId }: IProps) => {
  const [contacts, setContats] = useState<IContact[]>([]);

  useEffect(() => {
    api
      .get("/contacts", {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("@agenda:token") as string)}`,
        },
      })
      .then((res) => setContats(res.data))
      .catch((err) => console.log(err));
  }, [reload]);

  const removeContact = (e: any) => {
    api.delete(`/contacts/${e.target.id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("@agenda:token") as string)}`,
      },
    });
    setContats(contacts.filter((contact) => contact.id !== e.target.id));
  };

  return (
    <ThemeList>
      <h2>Meus Contatos</h2>
      <ul>
        {contacts.map((contact: IContact) => (
          <li key={contact.id}>
            <Card
              contact={contact}
              onClick={() => {
                setModal(true);
                setContactId(contact.id);
              }}
            />
            <span id={contact.id} onClick={removeContact}>
              x
            </span>
          </li>
        ))}
      </ul>
    </ThemeList>
  );
};

export default ListConatcts;
