var getPreviousUntil = require('./index.js')
document.body.innerHTML = '<ul>' +
                            '<li>Item 1</li>' +
                            '<li class="stop-here">Item 2</li>' +
                            '<li>Item 3</li>' +
                            '<li class="skip-me">Item 4</li>' +
                            '<li id="find-me">Item 5</li>' +
                            '<li class="skip-me">Item 6</li>' +
                            '<li>Item 7</li>' +
                            '<li class="stop-here">Item 8</li>' +
                            '<li>Item 9</li>' +
                          '</ul>';

test('test getPreviousUntil', function() {
  var findMe = document.querySelector('#find-me');
  var prev = getPreviousUntil(findMe, '.stop-here');
  expect(prev[0].innerHTML).toEqual('Item 4')
  expect(prev[1].innerHTML).toEqual('Item 3')
})