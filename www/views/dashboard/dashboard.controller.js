/**
 * Controller for login page
 */
(function () {
    "use strict";

    angular
        .module('app')
        .controller('Dashboard', Dashboard);

    Dashboard.$inject = ['$rootScope', '$state', '$ionicHistory', '$localStorage', 'user', '$sessionStorage', '$translate'];

    function Dashboard($rootScope, $state, $ionicHistory, $localStorage, user, $sessionStorage, $translate) {

        var vm = this;

        vm.user = {
            name: $localStorage.username
        };

        user.disableBackButton();

        vm.logout = logout;
        vm.changeLocale = changeLocale;

        function logout() {
            delete $sessionStorage.auth_key;
            delete $localStorage.auth_key;
            delete $localStorage.username;
            $state.go('login');
        }

        if($localStorage.locale) {
            if($localStorage.locale === 'en-US') {
                vm.locale = 'en-US';
                $translate.use('en');
            } else if($localStorage.locale === 'de-DE') {
                vm.locale = 'de-DE';
                $translate.use('de');
            } else {
                vm.locale = 'ru-RU';
                $translate.use('ru');
            }
        } else {
            $localStorage.locale = 'de-DE';
            $translate.use('de');
            vm.locale = 'de-DE';
        }

        function changeLocale() {
            $localStorage.locale = vm.locale;
            if(vm.locale === 'de-DE') {
                $translate.use('de');
            } else if(vm.locale === 'ru-RU') {
                $translate.use('ru');
            } else {
                $translate.use('en');
            }
        }

    }
})();
