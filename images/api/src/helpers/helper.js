/**
 * Check if the string is valid
 * @param {string} str - The string to check 
 * @returns {boolean} - True if the string is valid, false otherwise
 */
function checkString(str) {
    if (typeof str === "string" && str.length > 1 && str.length < 20) {
        return true;
    } else {
        return false;
    }
}

/**
 * Check if the integer is valid
 * @param {integer} int - The integer to check
 * @returns {boolean} - True if the integer is valid, false otherwise
 */
function checkInteger(int) {
    if (typeof int === "number" && int > 0 && int < 10000) {
        return true;
    } else {
        return false;
    }
}



module.exports = {
    checkString,
    checkInteger
}