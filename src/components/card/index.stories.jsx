import Card from "./index";
import data from "../../data.json";

export default {
  component: Card,
  title: "Component/Card",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "264px" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        {Story()}
      </div>
    ),
  ],
};

export const Primary = {
  args: {
    country: data[22],
  },
};
