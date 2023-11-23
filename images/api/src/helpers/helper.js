function checkString(str) {
    if (typeof str === "string" && str.length > 1 && str.length < 20) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    checkString
}