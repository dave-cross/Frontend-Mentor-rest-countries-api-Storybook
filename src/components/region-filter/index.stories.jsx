import RegionFilter from "./index";

export default {
  component: RegionFilter,
  title: "Component/RegionFilter",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = {};

export const HasSelected = {
  args: {
    selected: "Asia",
  },
};
