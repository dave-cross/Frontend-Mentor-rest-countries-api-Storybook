import "./index.css";

const Card = ({ country }) => {
  return (
    <article
      className="card"
      data-name={country.name.common}
      data-region={country.region}
    >
      <picture className="card__image">
        {/* <img src={country.flags.svg} alt={country.flags.alt} /> */}
        <img
          src={`https://flagcdn.com/${country.cca2.toLowerCase()}.svg`}
          alt={country.flags.alt}
        />
      </picture>
      <div className="card__content flow">
        <h2>
          <a href={country.cca2.toLowerCase()}>{country.name.common}</a>
        </h2>

        <p>
          <strong>Population:</strong>{" "}
          {country.population.toLocaleString("en-US")}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital ?? "none"}
        </p>
      </div>
    </article>
  );
};

export default Card;
