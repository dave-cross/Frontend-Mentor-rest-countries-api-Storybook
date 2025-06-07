import Main from "./index";
import data from "../../data.json";
import { sortCountries } from "../../utils/sortCountries";

const sorted = sortCountries(data);

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
