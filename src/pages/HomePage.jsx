import Store from "../components/Store";
import Section from "../components/Section";

function HomePage({ productInfo }) {
  return (
    <div className="bg-white ">
      <Store productInfo={productInfo} />
      <Section />
      <Section />
    </div>
  );
}

export default HomePage;
