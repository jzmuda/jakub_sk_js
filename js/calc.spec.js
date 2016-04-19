describe("run tests for calculator", function() {
	'use strict';
	
	// individual tests go here
	
	describe('test set function', function() {
		
		it('should throw an error for incorrect data', function() {
			// given
			var a = 'herp',
			b = 'derp';
			// when
			// then
			expect(function() { calc.set(a, b);}).toThrow(new Error('Corrupt input'));
        });
		
    });
	
	describe('test add function', function() {
		
		it('should add two numbers', function() {
			// given
			var a = 2,
			b = 11,
			result;
			// when
			calc.set(a,b);
			calc.add();
			result = calc.returnResult();
			// then
			expect(result).toBe(13);
        });
		
		it('should add two floats', function() {
			// given
			var a = 2.2,
			b = 11.8,
			result;
			// when
			calc.set(a,b);
			calc.add();
			result = calc.returnResult();
			// then
			expect(result).toBe(14);
        });
		
	});
	
	describe('test subtract function', function() {
		
		it('should subtract two numbers', function() {
			// given
			var a = 2,
			b = 11,
			result;
			// when
			calc.set(a,b);
			calc.subtract();
			result = calc.returnResult();
			// then
			expect(result).toBe(-9);
        });
		
		//Floating-point arithmetics precission issues. 
		it('should subtract two floats', function() {
			// given
			var a = 2.2,
			b = 11.8,
			result;
			// when
			calc.set(a,b);
			calc.subtract();
			result = calc.returnResult();
			// then
			expect(parseFloat(result.toFixed(4))).toBe(-9.6);
        });
		
	});
	
	describe('test multiply function', function() {
		
		it('should multiply two numbers', function() {
			// given
			var a = 2,
			b = 3,
			result;
			// when
			calc.set(a,b);
			calc.multiply();
			result = calc.returnResult();
			// then
			expect(result).toBe(6);
        });
		
		//Floating-point arithmetics precission issues. Again
		it('should multiply two floats', function() {
			// given
			var a = 1.1,
			b = 1.1,
			result;
			// when
			calc.set(a,b);
			calc.multiply();
			result = calc.returnResult();
			// then
			expect(parseFloat(result.toFixed(4))).toBe(1.21);
        });
		
	});
	
	describe('test divide function', function() {
		
		it('should divide two numbers', function() {
			// given
			var a = 9,
			b = 3,
			result;
			// when
			calc.set(a,b);
			calc.divide();
			result = calc.returnResult();
			// then
			expect(result).toBe(3);
        });
		
		//Floating-point arithmetics precission issues. Again
		it('should divide two floats', function() {
			// given
			var a = 11.1,
			b = 1.11,
			result;
			// when
			calc.set(a,b);
			calc.divide();
			result = calc.returnResult();
			// then
			expect(parseFloat(result.toFixed(4))).toBe(10);
        });
		
		it('should throw an error on division by zero', function() {
			// given
			var a = 3,
			b = 0;
			calc.set(a, b);
			// when
			// then
			expect(function() { calc.divide(); }).toThrow(new Error('Division by zero'));
        });
		
	});
	
	describe('test factorial function', function() {
		
		it('should return one for zero', function() {
			// given
			var a = 0,
			b = 0,
			result;
			// when
			calc.set(a,b);
			calc.factorial();
			result = calc.returnResult();
			// then
			expect(result).toBe(1);
        });
		
		it('should return one hundred and twenty for five', function() {
			// given
			var a = 5,
			b = 0,
			result;
			// when
			calc.set(a,b);
			calc.factorial();
			result = calc.returnResult();
			// then
			expect(result).toBe(120);
        });
		
		it('should throw an error on negative factorial', function() {
			// given
			var a = -1,
			b = 0;
			calc.set(a, b);
			// when
			// then
			expect(function() { calc.factorial(); }).toThrow(new Error('Factorial of negative number'));
        });
		
	});
	
});