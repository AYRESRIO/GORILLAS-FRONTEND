import "./styles.css";

type Props  = {
  name : string;
}
export default function ProductCategory({ name }: Props) {
  return (
    <div className="gorillas-category-container">
      <div className="gorillas-category">{ name }</div>
    </div>
  );
}
