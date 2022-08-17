import { Suspense, lazy } from "react";

import { Layout, NavBar } from "../components";

const HeaderTitle = lazy(() => import("../components/HeaderTitle"));
const ContentEnd = lazy(() => import("../components/ContentEnd"));

const EndPage = () => {
  return (
    <Layout>
      <NavBar />
      <Suspense fallback={<h3>Carregando ...</h3>}>
        <HeaderTitle name="Opções" />
        <ContentEnd />
      </Suspense>
    </Layout>
  );
};

export default EndPage;
