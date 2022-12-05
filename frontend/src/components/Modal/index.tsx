import { Container } from "./style";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

import Form from "../Form";
import Button from "../Button";

interface IProps {
  reference: any;
  modal: boolean;
  setModal: (e: boolean) => void;
  title?: string;
  url?: string;
  reload: boolean;
  setReload: (e: boolean) => void;
  form?: boolean;
  callback?: () => void;
}

export const Modal = ({
  reference,
  modal,
  setModal,
  title,
  url,
  reload,
  setReload,
  form = true,
  callback,
}: IProps) => {
  useEffect(() => {
    const handleEvent = (e: any) => {
      if (!reference.current?.contains(e.target)) {
        if (modal) {
          setModal(false);
        }
      }
    };
    window.addEventListener("mousedown", handleEvent);

    return () => window.removeEventListener("mousedown", handleEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div className="modalBox" ref={reference}>
        <IoClose onClick={() => setModal(false)} />
        <h2>{title}</h2>
        {form ? (
          <Form setModal={setModal} url={url} reload={reload} setReload={setReload} />
        ) : (
          <Button text="Confirmar" onClick={callback} />
        )}
      </div>
    </Container>
  );
};
