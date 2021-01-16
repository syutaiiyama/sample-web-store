import React, { useCallback } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { Pages } from "../../interfaces/pages";
import { useRouter } from "next/router";

type CategorySelectorProps = {
  pageType: string;
};

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  pageType,
}) => {
  const router = useRouter();

  const handleChange = useCallback((pageType) => {
    router.push(pageType);
  }, []);

  return (
    <FormControl style={{ marginRight: "30px" }}>
      <Select
        value={pageType}
        onChange={(event) => handleChange(event.target.value)}
      >
        <MenuItem value={Pages.Book}>Book</MenuItem>
        <MenuItem value={Pages.Clothe}>Clothe</MenuItem>
      </Select>
    </FormControl>
  );
};
