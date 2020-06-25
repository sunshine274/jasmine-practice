describe("FizzBuzz",function(){

beforeEach(function() {
    fizzbuzz = new fizzBuzz();
});

describe("Returns number, fizz, buzz or fizzbuzz", function(){

    it("should exist", function(){
        expect(fizzBuzz).toBeDefined();
    });
    it("should return Fizz when called as fizzBuzz(6)", function(){
        let result = fizzBuzz(6)
        expect(result).toBe("Fizz");
    });
    it("should return Buzz when called as fizzBuzz(10)", function(){
        let result = fizzBuzz(10)
        expect(result).toBe("Buzz");
    });
    it("should return FizzBuzz when called as fizzBuzz(30)", function(){
        let result = fizzBuzz(30)
        expect(result).toBe("FizzBuzz");
    });
});

});