import { useEffect, useState } from "react";
import { TDeviceType } from "./app.type";
import { GridSpacing } from "@material-ui/core";

export const appOperations = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarSticky, setIsSidebarSticky] = useState(true);
  const [deviceType, setDeviceType] = useState<TDeviceType>(null);
  const [containerSpacing, setContainerSpacing] = useState<GridSpacing>();

  useEffect(() => {
    const handleResize = () => {
      const deviceType =
        window.innerWidth < 464
          ? "mobile"
          : window.innerWidth < 960
          ? "tablet"
          : "desktop";
      setDeviceType(deviceType);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (deviceType === "desktop") {
      setContainerSpacing(4);
    } else if (deviceType === "tablet") {
      setContainerSpacing(3);
    } else {
      setContainerSpacing(2);
    }
  }, [deviceType]);

  const updateIsSticky = (isSticky: boolean) => setIsSticky(isSticky);
  const updateIsSidebarSticky = (isSidebarSticky: boolean) =>
    setIsSidebarSticky(isSidebarSticky);

  return {
    isSticky,
    isSidebarSticky,
    deviceType,
    containerSpacing,
    updateIsSticky,
    updateIsSidebarSticky,
  };
};
