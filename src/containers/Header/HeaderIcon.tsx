import React, { useCallback } from "react";
import { PagesType } from "../../interfaces/pages.type";
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

  if (pageType === PagesType.Book)
    return (
      <IconButton onClick={() => handleClick(PagesType.Book)}>
        <MenuBookIcon
          fontSize={"large"}
          color={"primary"}
          style={{ margin: "0 10px" }}
        />
      </IconButton>
    );

  if (pageType === PagesType.Clothe)
    return (
      <IconButton onClick={() => handleClick(PagesType.Clothe)}>
        <WorkSharpIcon
          fontSize={"large"}
          color={"primary"}
          style={{ margin: "0 10px" }}
        />
      </IconButton>
    );

  if (pageType === PagesType.Food)
    return (
      <IconButton onClick={() => handleClick(PagesType.Food)}>
        <FastfoodOutlinedIcon
          fontSize={"large"}
          color={"primary"}
          style={{ margin: "0 10px" }}
          onClick={() => handleClick(PagesType.Food)}
        />
      </IconButton>
    );

  return <></>;
};
