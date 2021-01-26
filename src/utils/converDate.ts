export const convertDate = (date: Date) => {
  return (
    date.getFullYear() +
    "年" +
    date.getMonth() +
    1 +
    "月" +
    date.getDate() +
    "日"
  );
};

export const convertDateFromString = (date: string) => {
  return (
    date?.substr(0, 4) +
    "年" +
    date?.substr(5, 2) +
    "月" +
    date?.substr(8, 2) +
    "日"
  );
};
