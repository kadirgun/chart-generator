import type { ChartOptions } from "./Chart";

const options: ChartOptions = {
  data: [
    {
      date: "Mar 22",
      Apples: 2890,
      Oranges: 2338,
      Tomatoes: 2452,
    },
    {
      date: "Mar 23",
      Apples: 2756,
      Oranges: 2103,
      Tomatoes: 2402,
    },
    {
      date: "Mar 24",
      Apples: 3322,
      Oranges: 986,
      Tomatoes: 1821,
    },
    {
      date: "Mar 25",
      Apples: 3470,
      Oranges: 2108,
      Tomatoes: 2809,
    },
    {
      date: "Mar 26",
      Apples: 3129,
      Oranges: 1726,
      Tomatoes: 2290,
    },
  ],
  series: [{ name: "Apples" }, { name: "Oranges" }, { name: "Tomatoes" }],
  theme: "dark",
  dataKey: "date",
  withLegend: true,
  legendProps: {
    verticalAlign: "bottom",
  },
  w: 500,
  title: "Fruits sold",
};

export const example = btoa(JSON.stringify(options));
