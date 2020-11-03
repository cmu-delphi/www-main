
(function () {
  // Wrap tables in a div so that they scroll responsively.
  function wrapTable() {
    const tables = document.querySelectorAll('table');
    tables.forEach((table) => {
      const tableWrapper = document.createElement('div');
      tableWrapper.className = 'table-wrapper';
      table.parentElement.replaceChild(tableWrapper, table);
      tableWrapper.appendChild(table);
    });
  };

  function initializeCodeFolding(showAll) {
    Array.from(document.querySelectorAll('pre.r, pre.python, pre.bash, pre.sql, pre.cpp, pre.stan, pre.julia, pre.foldable')).forEach((elem) => {
      const wrapper = document.createElement('details');
      wrapper.classList.add('code-wrapper');
      wrapper.open = showAll || false;
      elem.parentElement.replaceChild(wrapper, elem);
      const summary = document.createElement('summary');
      summary.innerText = 'Code';
      wrapper.appendChild(summary);
      wrapper.appendChild(elem);
    });
  }
  // use the jquery construct on purpose such that it will run after the CMU jquery handler
  $(document).ready(function () {
    wrapTable();
    initializeCodeFolding(false);
  });
})();


