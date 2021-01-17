import { useState } from "react";

export const loadingOperations = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");

  const openLoadingModal = (message: string) => {
    setLoadingMessage(message);
    setIsLoading(true);
  };

  const closeLoadingModal = () => {
    setIsLoading(false);
    setLoadingMessage("");
  };

  return {
    isLoading,
    loadingMessage,
    openLoadingModal,
    closeLoadingModal,
  };
};
