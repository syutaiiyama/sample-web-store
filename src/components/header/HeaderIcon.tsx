import React from "react";
import { Pages } from "../../interfaces/pages";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import WorkSharpIcon from "@material-ui/icons/WorkSharp";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import { ListItemIcon } from "@material-ui/core";

type HeaderIconProps = {
  pageType: string;
};

export const HeaderIcon: React.FC<HeaderIconProps> = ({ pageType }) => {
  if (pageType === Pages.Book)
    return (
      <MenuBookIcon
        fontSize={"large"}
        color={"primary"}
        style={{ margin: "0 30px" }}
      />
    );

  if (pageType === Pages.Clothe)
    return (
      <WorkSharpIcon
        fontSize={"large"}
        color={"primary"}
        style={{ margin: "0 30px" }}
      />
    );

  if (pageType === Pages.Food)
    return (
      <FastfoodOutlinedIcon
        fontSize={"large"}
        color={"primary"}
        style={{ margin: "0 30px" }}
      />
    );

  return <></>;
};
