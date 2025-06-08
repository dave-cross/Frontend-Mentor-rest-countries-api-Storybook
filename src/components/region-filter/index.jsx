import { useEffect, useRef } from "react";
import "./index.css";

const RegionFilter = ({ getSelected, selected }) => {
  const popoverRef = useRef(null);

  useEffect(() => {
    if (popoverRef.current) {
      popoverRef.current.showPopover();
    }
  }, []);

  function handleSelect(event) {
    let content = event.currentTarget.textContent;
    if (content === "America") {
      content = content + "s";
    }
    if (getSelected) {
      getSelected(content);
    }
    popoverRef.current.hidePopover();
  }
  return (
    <div className="region-filter">
      <button popoverTarget="filter-options" className="filter-button repel">
        Filter by Region
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z"
            fill="white"
          />
        </svg>
      </button>
      <menu
        popover="auto"
        id="filter-options"
        className="filter-options"
        ref={popoverRef}
      >
        <li>
          <button
            className="repel"
            data-selected={selected === "Africa"}
            onClick={handleSelect}
          >
            Africa
            {selected === "Africa" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="12"
                height="12"
              >
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
            ) : (
              ""
            )}
          </button>
        </li>
        <li>
          <button
            className="repel"
            data-selected={selected === "Americas"}
            onClick={handleSelect}
          >
            America
            {selected === "Americas" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="12"
                height="12"
              >
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
            ) : (
              ""
            )}
          </button>
        </li>
        <li>
          <button
            className="repel"
            data-selected={selected === "Asia"}
            onClick={handleSelect}
          >
            Asia
            {selected === "Asia" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="12"
                height="12"
              >
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
            ) : (
              ""
            )}
          </button>
        </li>
        <li>
          <button
            className="repel"
            data-selected={selected === "Europe"}
            onClick={handleSelect}
          >
            Europe
            {selected === "Europe" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="12"
                height="12"
              >
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
            ) : (
              ""
            )}
          </button>
        </li>
        <li>
          <button
            className="repel"
            data-selected={selected === "Oceania"}
            onClick={handleSelect}
          >
            Oceania
            {selected === "Oceania" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="12"
                height="12"
              >
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
            ) : (
              ""
            )}
          </button>
        </li>
      </menu>
    </div>
  );
};

export default RegionFilter;
