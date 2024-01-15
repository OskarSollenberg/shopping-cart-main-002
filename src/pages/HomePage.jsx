import Store from "../components/Store";
import Section from "../components/Section";

function HomePage({ onAdd, productInfo }) {
  return (
    <div className="bg-white">
      <Store productInfo={productInfo} onAdd={onAdd} />
      <Section />
      <Section />
    </div>
  );
}

export default HomePage;
