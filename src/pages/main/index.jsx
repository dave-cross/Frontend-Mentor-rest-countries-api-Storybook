import { useState } from "react";
import Header from "../../components/header";
import Search from "../../components/search";
import RegionFilter from "../../components/region-filter";
import Card from "../../components/card";

import "./index.css";

const MainPage = ({ data }) => {
  const [region, setRegion] = useState(null);
  const [search, setSearch] = useState("");
  const countries = data.filter((country) => {
    let isInSearch = true;
    let isInFilter = true;
    if (search !== "") {
      isInSearch = country.name.common.toLowerCase().includes(search);
    }
    if (region) {
      isInFilter = country.region === region;
    }
    return isInFilter && isInSearch;
  });
  return (
    <div className="main flow">
      <Header />
      <div className="main__filters repel center">
        <Search onChange={setSearch} />
        <RegionFilter getSelected={setRegion} selected={region} />
      </div>

      <main className="main__content center">
        <div className="grid">
          {countries.map((country) => (
            <Card country={country} key={country.cca3} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
