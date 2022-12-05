import { ThemeCard } from "./style";

interface IContact {
  id: string;
  fullName: string;
  emails: string[];
  phones: string[];
}

interface IProps {
  contact: IContact;
  onClick?: () => void;
}

const Card = ({ contact, onClick }: IProps) => {
  const { fullName, emails, phones } = contact;

  return (
    <ThemeCard onClick={onClick}>
      <h3>{fullName}</h3>
      <p>Melhor email: {emails[0]}</p>
      <p>Melhor telefone: {phones[0]}</p>
    </ThemeCard>
  );
};

export default Card;
