const topCountries = ["Germany", "United States", "Brazil", "Iceland"];
export function sortCountries(countries) {
  return countries.toSorted((a, b) => {
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
}
