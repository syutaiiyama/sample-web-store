import React, { useEffect } from "react";
import { useRouter } from "next/router";

const ProductPage: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("products/books");
  }, []);
  return <></>;
};

export default ProductPage;
