function calculator1(val) {
    //1.1
    if (val === undefined) return false;
    //1.2
    if (val === Number) {
        let val2 = val * val;
        return val2;
    }
    return val;
}

module.exports = {
    calculator1,
};
