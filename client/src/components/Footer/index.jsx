import React from 'react';

export default () => {
  const currentYear = new Date().getFullYear();
  const yearToShow = currentYear === 2019 ? '2019' : `2019-${currentYear}`;
  return (
    <footer className="main-footer">
      <p>
        <span className="year">
          &copy;&nbsp;
          {yearToShow}
          ,&nbsp;
        </span>
        <a href="https://github.com/joisadler">
          Yossi Adler&nbsp;
        </a>
        and the FYMdaily&nbsp;
        <a href="https://github.com/joisadler/fymdaily-client/graphs/contributors">
          contributors
        </a>
        .
      </p>
      <a href="https://platform.fatsecret.com">
        <img src="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.svg" alt="Powered by FatSecret" border="0" />
      </a>
    </footer>
  );
};
