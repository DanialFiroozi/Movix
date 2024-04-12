function NavTabs({ navTitle }) {
  return (
    <div className="ucm-nav-wrap">
      <ul className="nav nav-tabs" id="myTab">
        {navTitle.map((title, index) => {
          return (
            <li key={index} className="nav-item">
              <button className="nav-link" id={title}>
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavTabs;
