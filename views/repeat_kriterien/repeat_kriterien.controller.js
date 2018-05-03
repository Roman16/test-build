(function () {
    "use strict";

    angular
        .module('app')
        .controller('RepeatKriterien', RepeatKriterien);

    RepeatKriterien.$inject = ['$stateParams', '$localStorage', '$state', '$sessionStorage', 'user', '$scope'];

    function RepeatKriterien($stateParams, $localStorage, $state, $sessionStorage, user, $scope) {

        var vm = this;
        user.disableBackButton();

        vm.images = [];
        vm.damagStep = false;

        $sessionStorage.repeatStepId = $stateParams.id;
        vm.accountRole = $localStorage.accountRole;

        for(var i = 0; i < $localStorage.selected.kriteriens.length; i++) {
            console.log($localStorage.selected.kriteriens[i].question)
            if($localStorage.selected.kriteriens[i].question === 'Sichtkontrolle – Ist die äußere Beschaffenheit der Ware in Ordnung?') {
                vm.damagStep = i;
                break;
            }
        }

        vm.kriterien = [
            {
                id: 1,
                title:($sessionStorage.stepId == vm.damagStep && vm.accountRole == 3) ? ($localStorage.locale === 'en-US' ? 'Please take a photo of the damage' : $localStorage.locale === 'ru-RU' ? 'Пожалуйста, сделайте фотографию повреждения' : 'Bitte machen Sie ein Foto von dem Schaden.') : $localStorage.locale === 'en-US' ? 'Notes and Photos' : $localStorage.locale === 'ru-RU' ? 'Примечания и фотографии' : 'Notizen und Foto',
                question: 'Notizen und Foto',
                answer: 'Bestätigung',
                process_type: 3,
                photo: []
            },
            {
                id: 2,
                title: $localStorage.locale === 'en-US' ? 'Is the problem solved?' : $localStorage.locale === 'ru-RU' ? 'Решена ли проблема?' : 'Wurde das Problem behoben?',
                question: 'Wurde das Problem behoben?',
                name: 'Wurde das Problem behoben?',
                check: true,
                process_type: $localStorage.selected.kriteriens[$sessionStorage.stepId].process_type
            },
            {
                id: 3,
                title: $localStorage.locale === 'en-US' ? 'The problem was not solved. Please confirm the abort of the audit.' : $localStorage.locale === 'ru-RU' ? 'Проблема не была решена. Подтвердите отмену аудита.' : 'Das Problem wurde nicht behoben. Bitte bestätigen Sie den Abbruch der Kontrolle',
                question: 'Das Problem wurde nicht behoben. Bitte bestätigen Sie den Abbruch der Kontrolle',
                name: 'Prüfungen',
                process_type: 5
            }
        ];


        init();

        vm.acceptAnswer = acceptAnswer;

        $scope.safeApply = function (fn) {
            var phase = this.$root.$$phase;
            if (phase == '$apply' || phase == '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

        function init() {
            $sessionStorage.repeatStepId = $stateParams.id;
            vm.audit = angular.copy($localStorage.audit);
            if ($stateParams.id) {
                angular.forEach(vm.kriterien, function (item) {
                    if (item.id == $stateParams.id) {
                        vm.selectedKriterien = angular.copy(item);
                        vm.selectedKriterien.start_date = moment().format('YYYY-MM-DD HH:mm:ss');
                    }
                })
            }
        }

        function acceptAnswer(answer, confirmation_page, answer_data) {
            $sessionStorage.repeatStepId = $stateParams.id;
            if ($stateParams.id && +$stateParams.id != 3 && !vm.audit.kriterien[vm.audit.kriterien.length - 1].check) {
                // angular.forEach(vm.kriterien, function (item) {
                //     if (item.id == $stateParams.id) {
                vm.audit.kriterien.push(vm.selectedKriterien);
                // }
                // })
            }

            if (answer === 'Ja') {

                vm.selectedKriterien.answer = answer_data;
                vm.selectedKriterien.end_date = moment().format('YYYY-MM-DD HH:mm:ss');
                if (+$sessionStorage.repeatStepId == 1) {
                    vm.audit.kriterien[vm.audit.kriterien.length - 1] = vm.selectedKriterien;
                    $localStorage.audit = vm.audit;

                    $sessionStorage.repeatStepId++;
                    $state.go('app.repeat_kriterien', {id: $sessionStorage.repeatStepId});
                } else {
                    $localStorage.audit = vm.audit;
                    $sessionStorage.stepId++;
                    $state.go('app.kriterien', {id: $sessionStorage.stepId});
                }


            } else {

                if (confirmation_page) {
                    if (confirmation_page === 'confirm') {
                        if (answer_data) {
                            vm.selectedKriterien.answer = answer_data;
                        }
                        $sessionStorage.repeatStepId++;

                        $state.go('app.repeat_kriterien', {id: $sessionStorage.repeatStepId});
                    }
                    if (confirmation_page === 'back') {
                        $sessionStorage.repeatStepId--;
                        $state.go('app.repeat_kriterien', {id: $sessionStorage.repeatStepId});
                    }
                    if (confirmation_page === 'end') {
                        vm.audit.kriterien.push({
                            id: 3,
                            no_type: 2,
                            question: 'Abgebrochen',
                            name: 'Bestätigung',
                            answer: 'Bestätigung',
                            start_date: moment().format('YYYY-MM-DD HH:mm:ss'),
                            process_type: 5
                        });
                        $localStorage.audit = vm.audit;
                        $state.go('app.car_number');
                    }
                }
            }
        }

        var pictureSource;   // picture source
        var destinationType; // sets the format of returned value

        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            pictureSource = navigator.camera.PictureSourceType;
            destinationType = navigator.camera.DestinationType;
        }

        function onPhotoDataSuccess(imageData) {
            vm.selectedKriterien.photo.push("data:image/jpeg;base64," + imageData);
            $scope.safeApply();
            vm.selectedKriterien.extension = 'jpeg';
        }

        vm.capturePhoto = function () {
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
                quality: 50,
                destinationType: destinationType.DATA_URL
            });
        };

        function onFail(message) {
            alert('Failed because: ' + message);
        }

    }
})();
