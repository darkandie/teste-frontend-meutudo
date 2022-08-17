import { Suspense, lazy } from "react";

import { Layout, NavBar } from "../components";

const HeaderTitle = lazy(() => import("../components/HeaderTitle"));
const ContentValues = lazy(() => import("../components/ContentValues"));

const ValuePage = () => {
  return (
    <Layout>
      <NavBar />
      <Suspense fallback={<h3>Carregando ...</h3>}>
        <HeaderTitle name="Valores" />
        <ContentValues />
      </Suspense>
    </Layout>
  );
};

export default ValuePage;
