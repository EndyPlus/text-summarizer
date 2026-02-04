import { DATE_OPTIONS } from "./vars";

const getObj = (
  daysCount: number,
  mode: "last" | "between" | "older" | "exact",
  range: [number, number] = [30, 60],
) => {
  const now = new Date();

  const getDateAgo = (d: number, startOfDay = false) => {
    const date = new Date();
    date.setDate(now.getDate() - d);
    if (startOfDay) date.setHours(0, 0, 0, 0);
    return date;
  };

  switch (mode) {
    case "last":
      return { gte: getDateAgo(daysCount, daysCount === 0) };

    case "exact":
      return {
        gte: getDateAgo(daysCount, true),
        lt: getDateAgo(daysCount - 1, true),
      };

    case "older":
      return { lte: getDateAgo(daysCount) };

    case "between":
      return {
        gte: getDateAgo(range[1]),
        lte: getDateAgo(range[0]),
      };

    default:
      return {};
  }
};

export default function getDateFilter(timeOption: string) {
  switch (timeOption) {
    case DATE_OPTIONS.today:
      return getObj(0, "last");

    case DATE_OPTIONS.yesterday:
      return getObj(1, "exact");

    case DATE_OPTIONS.last7Days:
      return getObj(7, "last");

    case DATE_OPTIONS.last14Days:
      return getObj(14, "last");

    case DATE_OPTIONS.last30Days:
      return getObj(30, "last");

    case DATE_OPTIONS.range30To60Ago:
      return getObj(0, "between");

    case DATE_OPTIONS.moreThan60DaysAgo:
      return getObj(60, "older");

    default:
      return {};
  }
}
