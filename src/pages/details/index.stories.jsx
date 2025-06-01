import Details from "./index";
import { getBorderCountries } from "../../utils/borderCountries";
import data from "../../data.json";

function getCountry(name) {
  return data.find((country) => country.name.common === name);
}

export default {
  component: Details,
  title: "Pages/Details",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Vanuatu = {
  args: {
    data: getBorderCountries(getCountry("Vanuatu"), data),
  },
};
export const Afghanistan = {
  args: {
    data: getBorderCountries(getCountry("Afghanistan"), data),
  },
};

export const Canada = {
  args: {
    data: getBorderCountries(getCountry("Canada"), data),
  },
};
