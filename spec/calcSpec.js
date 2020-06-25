
describe("Calculator", function(){

    beforeEach(function(){
calc = new Calculator;
    });

    describe("Addition function", function(){
        it("should return 42", function(){
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function(){
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function(){
           spyOn (window,"alert");
           calc.add("Hitchhiker");
           expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});

describe("whatCanIDrink", function(){

beforeEach(function(){
drink = new whatCanIDrink();
});

    describe("check age", function(){
        it("should exist", function(){
            expect(whatCanIDrink).toBeDefined();
        });

        it("should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function(){
            let result = whatCanIDrink(-3);
            expect(result).toBe('Sorry. I can’t tell what drink because that age is incorrect!');
        });
        it("should return 'Drink Toddy'", function(){
            let result = whatCanIDrink(5);
            expect(result).toBe("Drink Toddy");
        });
        it("should return 'Drink Coke'", function(){
            let result = whatCanIDrink(15);
            expect(result).toBe("Drink Coke");
        });
        it("should return 'Drink Beer'", function(){
            let result = whatCanIDrink(20);
            expect(result).toBe("Drink Beer");
        });
        it("should return 'Drink Whisky'", function(){
            let result = whatCanIDrink(65);
            expect(result).toBe("Drink Whisky");
        });
        it("should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function(){
            let result = whatCanIDrink(185);
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});


