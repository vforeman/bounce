(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');

  });
  var tabs = document.querySelector('paper-tabs');
  tabs.addEventListener('core-select', function() {
    console.log("Selected: " + tabs.selected);
  });
  var fab = document.querySelector('paper-fab');
  fab.addEventListener('scroll', function() {
    console.log("scroll");
  });
// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
