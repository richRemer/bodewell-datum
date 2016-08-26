/**
 * Return true if value is a real number.
 * @param {number} value
 * @returns {boolean}
 */
function real(value) {
    return typeof value === "number"
        && Math.abs(value) !== Infinity
        && !isNaN(value);
}

/**
 * Data point.
 * @constructor
 * @param {Date} when
 * @param {number} value
 * @param {*} context
 */
function Datum(when, value, context) {
    if (!(this instanceof Datum)) {
        return new Datum(when, value, context);
    }

    if (!(when instanceof Date)) {
        throw new TypeError("expected Date");
    } else if (!real(value)) {
        throw new TypeError("expected real Number");
    }

    if (context === undefined) context = null;

    this.when = when;
    this.value = value;
    this.context = context;

    Object.freeze(this);
}

/**
 * @name Datum#when
 * @type {Date}
 * @readonly
 */
Datum.prototype.when = undefined;

/**
 * @name Datum#value
 * @type {number}
 * @readonly
 */
Datum.prototype.value = undefined;

/**
 * @name Datum#context
 * @type {*}
 * @readonly
 */
Datum.prototype.context = undefined;

/**
 * Evaluate value.
 */
Datum.prototype.valueOf = function() {
    return this.value;
};

module.exports = Datum;
