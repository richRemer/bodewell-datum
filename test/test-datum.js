var expect = require("expect.js"),
    Datum = require("..");

describe("Datum(Date, number, [*])", function() {
    it("should return Datum object", function() {
        expect(Datum(new Date(), 0)).to.be.a(Datum);
    });

    it("should initialize properties", function() {
        var date = new Date(),
            context = {},
            datum = Datum(date, 13, context);

        expect(datum.when).to.be(date);
        expect(datum.value).to.be(13);
        expect(datum.context).to.be(context);
    });

    it("should reject non-real numbers", function() {
        expect(() => Datum(new Date(), Infinity)).to.throwError();
        expect(() => Datum(new Date(), NaN)).to.throwError();
    });

    it("should return immutable object", function() {
        expect(Object.isFrozen(Datum(new Date(), 0))).to.be(true);
    });
});
