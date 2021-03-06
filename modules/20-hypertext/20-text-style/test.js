const { test } = require('tests');

test(({ query, expect }) => {
  const b = query(document, 'p > b', HTMLElement);
  expect(b).to.have.text('курсы');

  const em = query(document, 'p > em', HTMLElement);
  expect(em).to.have.text('по программированию');
});
