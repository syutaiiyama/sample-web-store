import React, { useEffect } from "react";
import { useRouter } from "next/router";

function ProductPage() {
  const router = useRouter();
  useEffect(() => {
    router.push("products/books");
  }, []);
  return <></>;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default ProductPage;
