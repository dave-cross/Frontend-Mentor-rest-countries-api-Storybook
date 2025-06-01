import "./index.css";

const Details = ({ country }) => {
  console.log(country);
  return (
    <article className="details cluster">
      <picture className="details__image">
        <img
          src={`https://flagcdn.com/${country.cca2.toLowerCase()}.svg`}
          alt={country.flags.alt}
        />
      </picture>
      <div className="details__content flow">
        <h1>{country.name.common}</h1>
        <div className="details__stats cluster">
          <div>
            <p>
              <strong>Native Name</strong>: {country.name.common} <br />
              <strong>Population</strong>:{" "}
              {country.population.toLocaleString("en-US")} <br />
              <strong>Region</strong>: {country.region} <br />
              <strong>Sub Region</strong>: {country.subregion} <br />
              <strong>Capital</strong>: {country.capital}
            </p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain</strong>: {country.tld.join(", ")} <br />
              <strong>Currencies</strong>:{" "}
              {Object.values(country.currencies)
                .map((cur) => cur.name)
                .join(", ")}{" "}
              <br />
              <strong>Languages</strong>:{" "}
              {Object.values(country.languages).join(", ")}
            </p>
          </div>
        </div>

        <div className="details__borders cluster">
          <strong>Border Countries:</strong>{" "}
          {country.borders
            ? country.borders.map((border) => (
                <>
                  <a href={border.cca2.toLowerCase()}> {border.name.common} </a>
                </>
              ))
            : "None"}
        </div>
      </div>
    </article>
  );
};

export default Details;
