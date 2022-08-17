import { Suspense, lazy } from "react";

import { Layout, NavBar } from "../components";

const HeaderTitle = lazy(() => import("../components/HeaderTitle"));
const ContentPeriod = lazy(() => import("../components/ContentPeriod"));

const PeriodPage = () => {
  return (
    <Layout>
      <NavBar />
      <Suspense fallback={<h3>Carregando ...</h3>}>
        <HeaderTitle name="Periodo" />
        <ContentPeriod />
      </Suspense>
    </Layout>
  );
};

export default PeriodPage;
