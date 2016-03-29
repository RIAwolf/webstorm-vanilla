(function() {
    var app = angular.module('Demo', []);

    app.controller('WelcomeController', function(){
        this.greeting = 'Welcome';
    });
})();