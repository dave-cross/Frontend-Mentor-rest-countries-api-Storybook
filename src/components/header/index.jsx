import ColorSwitch from "../color-switch";

import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper repel center">
        <p className="app-name">Where in the World?</p>
        <ColorSwitch />
      </div>
    </header>
  );
};

export default Header;
