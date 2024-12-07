import "./styles.css";

type Props = {
  text: string;
};
export default function ButtonPrimary({ text }: Props) {
  return <div className="gorillas-btn gorillas-btn-blue">{text}</div>;
}
