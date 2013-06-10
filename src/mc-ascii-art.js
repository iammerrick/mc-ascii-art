angular.module('app', [])
  .directive('asciiArt', function() {
    return {
      restrict: 'AE',
      scope: { text: '@' },
      link: function(scope, element, attrs) {
        var text = scope.text || element.text();
        var write = function(t) {
          if(typeof(scope.text) === 'string') { t = t || ' '; }
          t && Figlet.write(t, (attrs.font || 'Basic'), function(str) {
            element.text(str);
          });
        };

        element.css({ 'white-space': 'pre' });
        scope.$watch('text', write);
        write(text);
      }
    };
  });
