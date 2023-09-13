function calculate(f) {
    return function (a) {
        return function (b) {
            return function (c) {
                return f(a, b, c)
            }
        }
    }
}

function cal(a, b, c) {
    if (c == "+") {
        return a + b
    } else if (c == "-") {
        return a - b
    } else if (c == "*") {
        return a * b
    } else if (c == "/") {
        return a / b
    }
}

let calResult = calculate(cal);
calResult(1)(2)("*");

