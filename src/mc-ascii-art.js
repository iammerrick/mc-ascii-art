angular.module('app', [])
  .directive('mcAsciiArt', function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        var text = element.text();
        
        element.css({ 'white-space': 'pre' });
        
        Figlet.write(text, (attrs.font || 'Basic'), function(str) {
          element.text(str);
        });
      }
    };
  });