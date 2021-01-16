import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const IndexPage: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/products/books");
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default IndexPage;
