const Munros = require('./models/munros.js');
const MunrosListView = require('./views/munros_list_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#munros');
  const munrosListView = new MunrosListView(container);
  munrosListView.bindEvents();

  const munros = new Munros();
  munros.bindEvents();

  const selectContainer = document.querySelector('#select-munro');
  const selectView = new SelectView(selectContainer);
  selectView.bindEvents();
})
