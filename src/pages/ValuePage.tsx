import { HeaderTitle, Layout, NavBar } from "../components";
import ContentValues from "../components/ContentValues";

const ValuePage = () => {
  return (
    <Layout>
      <NavBar />
      <HeaderTitle name="Valores" />
      <ContentValues />
    </Layout>
  );
};

export default ValuePage;
