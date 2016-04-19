'use strict';
var navigatorScript = (function() {
	var calculatorPage = document.getElementById('calculator'),
		jsonRequestPage = document.getElementById('jsonRequest');
    return {
        showWelcome: function() {
            jsonRequestPage.style.display = 'none';
            calculatorPage.style.display = 'none';
        },
        showCalculatorPage: function() {
            jsonRequestPage.style.display = 'none';
            calculatorPage.style.display = 'block';
        },
        showJsonRequestPage: function() {
            jsonRequestPage.style.display = 'block';
            calculatorPage.style.display = 'none';
        }
    };
})();

navigatorScript.showWelcome();