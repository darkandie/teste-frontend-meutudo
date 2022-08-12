import React from "react";

import Clientinfo from "../components/ClientInfo";
import Content from "../components/Content";
import Layout from "../components/LayoutContainer";
import NavBar from "../components/NavBAr";

const Home = () => {
  return (
    <Layout>
      <NavBar />
      <Clientinfo />
      <Content />
    </Layout>
  );
};

export default Home;
