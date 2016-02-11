(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent,[heroService]);
  });
})(window.app || (window.app = {}));
