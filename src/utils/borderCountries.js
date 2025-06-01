export function getBorderCountries(country, countries) {
  const borderCountries = country.borders
    ? country.borders.map((border) => {
        const borderCountry = countries.find(
          (country) => country.cca3 === border
        );
        return borderCountry;
      })
    : null;

  return {
    ...country,
    borders: borderCountries,
  };
}
