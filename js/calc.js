'use strict';
var calc = (function() {
	var x, y, result;
    return {
		//for index.html data load
		load: function() {
			if (isNaN(parseFloat(document.getElementById('numberA').value)) || isNaN(parseFloat(document.getElementById('numberB').value))) {
				throw new Error('Corrupt input');
            }
			this.x = parseFloat(document.getElementById('numberA').value);
			this.y = parseFloat(document.getElementById('numberB').value);
		},
		//for arithmetic tests with Karma
		set: function(x,y) {
			if (isNaN(x) || isNaN(y)) {
				throw new Error('Corrupt input');
            }
			this.x = x;
			this.y = y;
		},
        add: function() {
            this.result = this.x+this.y;
        },
        subtract: function() {
			this.result = this.x-this.y;
        },
		multiply: function() {
			this.result = this.x*this.y;
        },
		divide: function() {
			if (this.y===0) {
				throw new Error('Division by zero');
			}
			this.result = this.x/this.y;
        },
		factorial: function() {
			if (this.x<0) {
				throw new Error('Factorial of negative number');
            }
            this.result =1;
			if (this.x>1) {
				for(var i= 2; i<=this.x; i+=1)
					this.result*=i;
			}
        },
		//clear button
		clearFields: function() {
			this.x = undefined;
			this.y = undefined;
            this.result = undefined;
			document.getElementById('numberA').value = undefined;
			document.getElementById('numberB').value = undefined;
			document.getElementById('result').value = undefined;
        },
		//for arithmetic tests
		returnResult: function() {
			return this.result;
		},
		//for index.html
		printResult: function() {
			document.getElementById('result').value = this.result;
		},
		//for debugger
		printContent: function() {
			console.log('x = '+this.x+' y= '+this.y+' result = '+this.result);
		}
    };
})();