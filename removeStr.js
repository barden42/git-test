const removeStr = function(str, minChar) {
    if (str.length >= minChar) {
        return str.toLowerCase();
    } 
    
    return str.length;
}

module.exports = removeStr;