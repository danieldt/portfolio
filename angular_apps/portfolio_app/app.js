var app = angular.module('portfolioApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'PortfolioController',
                templateUrl: '/portfolio_app/partials/my_portfolio.html'
            })
        .otherwise({ redirectTo: '/' });
});
