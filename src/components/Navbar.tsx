import { RouteList } from "../Routes";

export default function Navbar() {
  const routeList = RouteList;

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="./">
            <strong>ContemplateJS</strong>
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <div className="navbar-nav me-auto mt-2 mt-lg-0">&nbsp;</div>

            <div className="d-flex my-2 my-lg-0">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Language
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    {[{ name: "English" }, { name: "Portuguese" }].map(
                      (language) => (
                        <a className="dropdown-item" href="./">
                          {language.name}
                        </a>
                      )
                    )}
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sections
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    {routeList.map((routeItem) => (
                      <a className="dropdown-item" href={routeItem.path}>
                        {routeItem.label}
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
