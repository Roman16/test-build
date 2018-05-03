(function () {
    'use strict';
    angular
        .module('app')
        .config(mainConfig);

    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicLoadingConfig', '$ionicConfigProvider', '$mdGestureProvider', '$translateProvider'];

    /**
     * Function for configurate angular app
     */
    function mainConfig($stateProvider, $urlRouterProvider, $ionicLoadingConfig, $ionicConfigProvider, $mdGestureProvider, $translateProvider) {

        // $ionicConfigProvider.views.maxCache(0);
        $ionicConfigProvider.backButton.text('');
        $ionicConfigProvider.views.swipeBackEn,
        $mdGestureProvider.skipClickHijack();


        // $translateProvider.useLoader('$translatePartialLoader', {
        //     urlTemplate: '{part}/i18n/{lang}.json'
        // });
        //
        // $translateProvider.preferredLanguage('de');
        //
        // $translateProvider.useSanitizeValueStrategy('sanitize');
        //
        // $translatePartialLoaderProvider.addPart('www/vie');

        /**
         * Configuring ionic loader
         */
        angular.extend($ionicLoadingConfig, {
            noBackdrop: true
        });

        /**
         * Configuring state provider
         */
        $stateProvider
            .state('login', {
                url: '/login',
                cache: false,
                templateUrl: 'views/login/login.html',
                controller: 'Login',
                controllerAs: 'vm'
            })
            .state('signup', {
                url: '/signup',
                cache: false,
                templateUrl: 'views/signup/signup.html',
                controller: 'Signup',
                controllerAs: 'vm'
            })
            .state('password', {
                url: '/password',
                cache: false,
                templateUrl: 'views/reset_password/reset_password.html',
                controller: 'Password',
                controllerAs: 'vm'
            })
            .state('app', {
                url: '/app',
                cache: false,
                abstract: true,
                templateUrl: 'views/menu/menu.html',
                controller: 'AppCtrl',
                controllerAs: 'vm'
            })
            .state('app.main', {
                url: '/main',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'views/main/main.html',
                        controller: 'Main',
                        controllerAs: 'vm'
                    }
                },
                resolve: {}
            })
            .state('app.dashboard', {
                url: '/dashboard',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'views/dashboard/dashboard.html',
                        controller: 'Dashboard',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.referenz_page', {
                url: '/referenz-page/:auditId',

                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'views/reference_page/reference_page.html',
                        controller: 'ReferenzPage',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.kriterien', {
                url: '/kriterien/:id',
                cache: false,
                params: {
                    id: null
                },
                views: {
                    'menuContent': {
                        templateUrl: 'views/kriterien/kriterien.html',
                        controller: 'Kriterien',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.repeat_kriterien', {
                url: '/repeat-kriterien/:id',
                cache: false,
                params: {
                    id: null
                },
                views: {
                    'menuContent': {
                        templateUrl: 'views/repeat_kriterien/repeat_kriterien.html',
                        controller: 'RepeatKriterien',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.car_number', {
                url: '/car-number',
                cache: false,
                params: {
                    id: null
                },
                views: {
                    'menuContent': {
                        templateUrl: 'views/end_step/car_number/car_number.html',
                        controller: 'CarNumber',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.loader_signature', {
                url: '/loader-signature',
                cache: false,
                params: {
                    id: null
                },
                views: {
                    'menuContent': {
                        templateUrl: 'views/end_step/loader_signature/loader_signature.html',
                        controller: 'LoaderSignature',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.shipper_signature', {
                url: '/shipper-signature',
                cache: false,
                params: {
                    id: null
                },
                views: {
                    'menuContent': {
                        templateUrl: 'views/end_step/shipper_signature/shipper_signature.html',
                        controller: 'ShipperSignature',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.congrats', {
                url: '/congrats/:defeat',
                cache: false,
                params: {
                    defeat: null
                },
                views: {
                    'menuContent': {
                        templateUrl: 'views/congrats/congrats.html',
                        controller: 'Congrats',
                        controllerAs: 'vm'
                    }
                }
            });

        $urlRouterProvider.otherwise('/login');


        $translateProvider.translations('en', {
            YES: 'yes',
            OKAY: 'Okay',
            NO: 'no',
            BACK: 'back',
            CONTINUE: 'Continue',
            ABORTED: 'Aborted',
            DASHBOARD: {
                TITLE: 'The application for legally compliant loading',
                OUT: 'Log out',
                TO_THE: 'Go to DC list'
            },
            LOGIN: {
                LOG_IN: 'log in',
                SEND_CODE: 'Send code'
            },
            MAIN: {
                TITLE: 'Please select a template for the upcoming audit.',
                UPDATE_LIST: 'Update list'
            },
            REFERENCE: {
                TITLE: 'Enter reference',
                DESCRIPTION: 'Please enter random reference'
            },
            KRITERIEN: {
                QUESTION: 'Question'
            },
            REPEAT_KRITERIEN: {
                PHOTO: 'Take photo',
                START_DC: 'Start DC'
            },
            CONGRATS: {
                TITLE: 'Audit finished!',
                PROCESS: 'Process',
                TIME: 'Time',
                DESCRIPTION: 'Description',
                ANSWER: 'Answer',
                NOTE: 'Note'
            },
            END_STEP: {
                RECEIVER: 'Please enter signature',
                FORWARDER: 'Signature forwarder',
                CAR_NUMBER: 'Please enter plate number with minus and space characters: AB-CD 1234',
                CAR_NUMBER_TITLE: 'Enter the identifier of the means of transport'
            }
        });
        $translateProvider.translations('de', {
            YES: 'ja',
            OKAY: 'Okay',
            NO: 'nein',
            BACK: 'Zurück',
            CONTINUE: 'Weiter',
            ABORTED: 'Abgelehnt',
            DASHBOARD: {
                TITLE: 'Die Applikation zur rechtssicheren Verladung',
                OUT: 'Log out',
                TO_THE: 'Zur DC-Liste'
            },
            LOGIN: {
                LOG_IN: 'Einloggen',
                SEND_CODE: 'Code absenden'
            },
            MAIN: {
                TITLE: 'Bitte wählen Sie eine Vorlage für die bevorstehende Kontrolle.',
                UPDATE_LIST: 'Liste aktualisieren'
            },
            REFERENCE: {
                TITLE: 'Referenz eingeben',
                DESCRIPTION: 'Bitte beliebige Referenz eingeben'
            },
            KRITERIEN: {
                QUESTION: 'Frage'
            },
            REPEAT_KRITERIEN: {
                PHOTO: 'Foto machen',
                START_DC: 'Start DC'
            },
            CONGRATS: {
                TITLE: 'Audit beendet!',
                PROCESS: 'Vorgang',
                TIME: 'Uhrzeit',
                DESCRIPTION: 'Verfahrensbeschreibung',
                ANSWER: 'Antwort',
                NOTE: 'Vermerk'
            },
            END_STEP: {
                RECEIVER: 'Bitte unterschreiben',
                FORWARDER: 'Signatur des Fahrers',
                CAR_NUMBER: 'Bitte Nummernschild mit minus- und Leerzeichen eingeben: AB-CD 1234',
                CAR_NUMBER_TITLE: 'Kennzeichen des Transportmittels eingeben'
            }
        });
        $translateProvider.translations('ru', {
            YES: 'Да',
            OKAY: 'Хорошо',
            NO: 'Нет',
            BACK: 'Назад',
            CONTINUE: 'Далее',
            ABORTED: 'Отвергнуто',
            DASHBOARD: {
                TITLE: 'Приложение для легально-соответствующей погрузки',
                OUT: 'Выйти',
                TO_THE: 'Список DC'
            },
            LOGIN: {
                LOG_IN: 'Войти',
                SEND_CODE: 'Отправить код'
            },
            MAIN: {
                TITLE: 'Пожалуйста, выберите  аудит со списка для подальшой проверки.',
                UPDATE_LIST: 'Обновить список'
            },
            REFERENCE: {
                TITLE: 'Укажите название',
                DESCRIPTION: 'Укажите любое название'
            },
            KRITERIEN: {
                QUESTION: 'Вопрос'
            },
            REPEAT_KRITERIEN: {
                PHOTO: 'Сделайте снимок',
                START_DC: 'Начать DC'
            },
            CONGRATS: {
                TITLE: 'Аудит завершен!',
                PROCESS: 'Процесс',
                TIME: 'Время',
                DESCRIPTION: 'Описание',
                ANSWER: 'Решение',
                NOTE: 'Коментарий'
            },
            END_STEP: {
                RECEIVER: 'Пожалуйста, поставьте подпись',
                FORWARDER: 'Подпись перевозчика',
                CAR_NUMBER: 'Используйте символы «минус» и «пробел»: AB-CD 1234',
                CAR_NUMBER_TITLE: 'Введите номер транспортного средства'
            }
        });

    }

})();

