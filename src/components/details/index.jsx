import React from "react";
import "./index.css";

const Details = ({ country }) => {
  return (
    <article className="details sidebar">
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
              <strong>Sub Region</strong>: {country.subregion ?? "n/a"} <br />
              <strong>Capital</strong>: {country.capital ?? "none"}
            </p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain</strong>: {country.tld.join(", ")} <br />
              <strong>Currencies</strong>:{" "}
              {country.currencies
                ? Object.values(country.currencies)
                    .map((cur) => cur.name)
                    .join(", ")
                : "none"}{" "}
              <br />
              <strong>Languages</strong>:{" "}
              {country.languages
                ? Object.values(country.languages).join(", ")
                : "none"}
            </p>
          </div>
        </div>

        <div className="details__borders cluster">
          <strong>Border Countries:</strong>{" "}
          {country.borders
            ? country.borders.map((border) => (
                <React.Fragment key={border.cca2}>
                  <a href={border.cca2.toLowerCase()}> {border.name.common} </a>
                </React.Fragment>
              ))
            : "none"}
        </div>
      </div>
    </article>
  );
};

export default Details;
