/****** COMPOSE *************************/
const makeLouder = s => s.toUpperCase();
const repeat = s => s.repeat(2);
const addHello = s => s + 'hello';

const compose = (...fns) => {
    return fns.reduce((f, g) => {
        return (...args) => f(g(...args));
    });
}

const result = compose(addHello, repeat, makeLouder);
console.log("MY COMPOSE: ", result('world'));
