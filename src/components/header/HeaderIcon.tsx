import React, { useCallback } from "react";
import { Pages } from "../../interfaces/pages";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import WorkSharpIcon from "@material-ui/icons/WorkSharp";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import { IconButton } from "@material-ui/core";
import { useRouter } from "next/router";

type HeaderIconProps = {
  pageType: string;
};

export const HeaderIcon: React.FC<HeaderIconProps> = ({ pageType }) => {
  const router = useRouter();
  const handleClick = useCallback((url: string) => {
    router.push(url);
  }, []);

  if (pageType === Pages.Book)
    return (
      <IconButton onClick={() => handleClick(Pages.Book)}>
        <MenuBookIcon
          fontSize={"large"}
          color={"primary"}
          style={{ margin: "0 10px" }}
        />
      </IconButton>
    );

  if (pageType === Pages.Clothe)
    return (
      <IconButton onClick={() => handleClick(Pages.Clothe)}>
        <WorkSharpIcon
          fontSize={"large"}
          color={"primary"}
          style={{ margin: "0 10px" }}
        />
      </IconButton>
    );

  if (pageType === Pages.Food)
    return (
      <IconButton onClick={() => handleClick(Pages.Food)}>
        <FastfoodOutlinedIcon
          fontSize={"large"}
          color={"primary"}
          style={{ margin: "0 10px" }}
          onClick={() => handleClick(Pages.Food)}
        />
      </IconButton>
    );

  return <></>;
};
