import "./styles.css";
type Props = {
  text: string;
};
export default function ButtonInverse({ text }: Props) {
  return <div className="gorillas-btn gorillas-btn-white">{text}</div>;
}
