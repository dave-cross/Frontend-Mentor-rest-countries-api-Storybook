import Details from "./index";
import data from "../../data.json";
import { getBorderCountries } from "../../utils/borderCountries";

function getCountry(name) {
  return data.find((country) => country.name.common === name);
}

export default {
  component: Details,
  title: "Component/Details",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Vanuatu = {
  args: {
    country: getBorderCountries(getCountry("Vanuatu"), data),
  },
};
export const Afghanistan = {
  args: {
    country: getBorderCountries(getCountry("Afghanistan"), data),
  },
};

export const Canada = {
  args: {
    country: getBorderCountries(getCountry("Canada"), data),
  },
};
