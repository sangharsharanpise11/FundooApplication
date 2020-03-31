'use strict';

(function () {
    function init() {
        console.log("in app.js");

        var router = new Router([
            new Route('login', 'login.html', true),            
            new Route('forgot', 'forgot.html'),
            new Route('reset', 'reset.html'),            
            new Route('newAccount', 'newAccount.html'),
            // new Route('dashboard','dashboard.html')
        ]);
    }
    init();
}());