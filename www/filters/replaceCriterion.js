(function () {
    'use strict';

    angular
        .module('filter.replace', [])
        .filter('replaceCriterion', replaceCriterion)
        .filter('replaceAnswer', replaceAnswer);

    function replaceCriterion($localStorage) {
        return function (value) {
            switch (value) {
                case 'Wurde die Verladung nur vom Verlader durchgeführt?':
                    return $localStorage.locale === 'en-US' ? 'Was the loading only proceeded by the shipper?' : $localStorage.locale === 'ru-RU' ? 'Была ли погрузка выполнена только отправителем?' : 'Wurde die Verladung nur vom Verlader durchgeführt?';
                    break;
                case 'Wurde die Ladefläche vor der Verladung in einen besenreinen Zustand gebracht?':
                    return $localStorage.locale === 'en-US' ? 'Was the loading area of the trailer placed in a clean state before loading?' : $localStorage.locale === 'ru-RU' ? 'Прицеп был в чистом состоянии перед погрузкой?' : "Wurde die Ladefläche vor der Verladung in einen besenreinen Zustand gebracht?";
                    break;
                case 'Wurde die Ladungssicherung ordnungsgemäß umgesetzt?':
                    return $localStorage.locale === 'en-US' ? 'Was the load securing system implemented correctly?' : $localStorage.locale === 'ru-RU' ? 'Груз закреплён надёжно?' : "Wurde die Ladungssicherung ordnungsgemäß umgesetzt?";
                    break;
                case 'Ist die äußere Beschaffenheit des Fahrzeugs in Ordnung (Sichtkontrolle)?':
                    return $localStorage.locale === 'en-US' ? 'Is the exterior of the vehicle in order (visual inspection)?' : $localStorage.locale === 'ru-RU' ? 'Транспортное средство в порядке (визуальный осмотр)?' : "Ist die äußere Beschaffenheit des Fahrzeugs in Ordnung (Sichtkontrolle)?";
                    break;
                case 'Ist die Fahrerlaubnis des Frachtführers in Ordnung?':
                    return $localStorage.locale === 'en-US' ? 'Is the drivers licence of the carrier valid?' : $localStorage.locale === 'ru-RU' ? 'Водительские права перевозчика действительные?' : "Ist die Fahrerlaubnis des Frachtführers in Ordnung?";
                    break;
                case 'Ist der Zustand des Fahrers in Ordnung?':
                    return $localStorage.locale === 'en-US' ? "Is the driver's condition appropriate?" : $localStorage.locale === 'ru-RU' ? 'Состояние водителя соответствующее?' : "Ist der Zustand des Fahrers in Ordnung?";
                    break;
                case 'Identitskontrolle: Ist die Lieferanschrift richtig?':
                    return $localStorage.locale === 'en-US' ? "Identity control: Is the delivery address correct?" : $localStorage.locale === 'ru-RU' ? 'Адрес поставки правильный?' : "Identitskontrolle: Ist die Lieferanschrift richtig?";
                    break;
                case 'Vollständigkeitskontrolle - Ist die Liefermenge richtig?':
                    return $localStorage.locale === 'en-US' ? "Quantity control: Is the delivery quantity correct?" : $localStorage.locale === 'ru-RU' ? 'Количество груза правильное?' : "Vollständigkeitskontrolle - Ist die Liefermenge richtig?";
                    break;
                case 'Sichtkontrolle – Ist die äußere Beschaffenheit der Ware in Ordnung?':
                    return $localStorage.locale === 'en-US' ? "Sight control: Is the constitution of the article okay?" : $localStorage.locale === 'ru-RU' ? 'Состояние груза в порядке (визуальный осмотр)?' : "Sichtkontrolle – Ist die äußere Beschaffenheit der Ware in Ordnung?";
                    break;
                case 'Verlader: Quittieren des Protokolls':
                    return $localStorage.locale === 'en-US' ? "Shipper: Confirmation  of the Protocol" : $localStorage.locale === 'ru-RU' ? 'Грузоотправитель: Подтверждение протокола' : "Verlader: Quittieren des Protokolls";
                    break;
                case 'Frachtführer: Quittieren des Protokolls':
                    return $localStorage.locale === 'en-US' ? "Carrier: Confirmation  of the Protocol" : $localStorage.locale === 'ru-RU' ? 'Перевозчик: Подтверждение протокола' : "Frachtführer: Quittieren des Protokolls";
                    break;
                case 'Empfänger: Quittieren des Protokolls':
                    return $localStorage.locale === 'en-US' ? "Receiver: Confirmation  of the Protocol" : $localStorage.locale === 'ru-RU' ? 'Получатель: Подтверждение протокола' : "Empfänger: Quittieren des Protokolls";
                    break;
                case 'Kennzeichen des Transportmittels eingeben':
                    return $localStorage.locale === 'en-US' ? "Plate number" : $localStorage.locale === 'ru-RU' ? 'Номер автомобиля' : "Kennzeichen des Transportmittels eingeben";
                    break;
                case 'WBP-Rfz. Eingeben. Beginn der Kontrolle?':
                    return $localStorage.locale === 'en-US' ? "Enter reference" : $localStorage.locale === 'ru-RU' ? 'Укажите название' : "WBP-Rfz. Eingeben. Beginn der Kontrolle?";
                    break;
                case 'Bitte machen Sie ein Foto von dem Schaden':
                    return $localStorage.locale === 'en-US' ? "Please take a photo of the damage" : $localStorage.locale === 'ru-RU' ? 'Пожалуйста, сделайте фотографию повреждения' : "Bitte machen Sie ein Foto von dem Schaden";
                    break;
                case 'Abgebrochen':
                    return $localStorage.locale === 'en-US' ? "Canceled" : $localStorage.locale === 'ru-RU' ? 'Отменен' : "Abgebrochen";
                    break;
                case 'Das Problem wurde nicht behoben. Bitte bestätigen Sie den Abbruch der Kontrolle':
                    return $localStorage.locale === 'en-US' ? "The problem was not solved. Please confirm the abort of the audit." : $localStorage.locale === 'ru-RU' ? 'Проблема не была решена. Подтвердите отмену аудита.' : "Das Problem wurde nicht behoben. Bitte bestätigen Sie den Abbruch der Kontrolle";
                    break;
                case 'Wurde das Problem behoben?':
                    return $localStorage.locale === 'en-US' ? "Is the problem solved?" : $localStorage.locale === 'ru-RU' ? 'Решена ли проблема?' : "Wurde das Problem behoben?";
                    break;
                case 'Notizen und Foto':
                    return $localStorage.locale === 'en-US' ? "Canceled" : $localStorage.locale === 'ru-RU' ? 'Примечания и фотографии' : "Notes and Photos";
                    break;
                default:
                    return value;
            }
        }
    }

    function replaceAnswer($localStorage) {
        return function (value) {
            switch (value) {
                case 'Ja':
                    return $localStorage.locale === 'en-US' ? 'Yes' : $localStorage.locale === 'ru-RU' ? 'Да' : 'Ja';
                    break;
                    case 'Nein':
                    return $localStorage.locale === 'en-US' ? 'No' : $localStorage.locale === 'ru-RU' ? 'Нет' : 'Nein';
                    break;
                    case 'Bestätigung':
                    return $localStorage.locale === 'en-US' ? 'Confirmation' : $localStorage.locale === 'ru-RU' ? 'Подтверджение' : 'Bestätigung';
                    break;
                default:
                    return value;
            }
        }
    }
})();