import Main from "./index";
import data from "../../data.json";

const topCountries = ["Germany", "United States", "Brazil", "Iceland"];
const sorted = data.toSorted((a, b) => {
  let first = a.name.common;
  let second = b.name.common;
  if (topCountries.includes(first)) {
    let index = topCountries.indexOf(first);
    first = index + first;
  }
  if (topCountries.includes(second)) {
    let index = topCountries.indexOf(second);
    second = index + second;
  }
  // if (a.name.common === "Germany") {
  //   return -1;
  // }
  // if (b.name.common === "Germany") {
  //   return 1;
  // }
  // if (a.name.common === "United States") {
  //   return -1;
  // }
  // if (b.name.common === "United States") {
  //   return 1;
  // }
  // if (a.name.common === "Brazil") {
  //   return -1;
  // }
  // if (b.name.common === "Brazil") {
  //   return 1;
  // }
  // if (a.name.common === "Iceland") {
  //   return -1;
  // }
  // if (b.name.common === "Iceland") {
  //   return 1;
  // }
  // if (topCountries.includes(a.name.common)) {
  //   return -1;
  // }
  // if (topCountries.includes(b.name.common)) {
  //   return 1;
  // }
  // return a.name.common > b.name.common ? 1 : -1;
  return first.localeCompare(second);
});

export default {
  component: Main,
  title: "Pages/Main",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = {
  args: {
    data: sorted,
  },
};
