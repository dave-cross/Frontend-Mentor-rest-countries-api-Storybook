import Header from "../../components/header";
import Details from "../../components/details";
import BackButton from "../../components/back-button";

import "./index.css";

const MainPage = ({ data }) => {
  return (
    <div className="details-page flow">
      <Header />
      <div className="details-page__back center" data-responsive="1278-570">
        <BackButton />
      </div>
      <main className="details-page__content center" data-responsive="1278-570">
        <Details country={data} />
      </main>
    </div>
  );
};

export default MainPage;
