function greet(name) {
    // Trim spaces from start and end
    let cleanName = name.trim();
    
    // Capitalize first letter
    cleanName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1).toLowerCase();
    
    // Reverse the name
    let reversedName = cleanName.split("").reverse().join("");
    
    // Count length of name
    let length = cleanName.length;
    
    return `Hello, ${cleanName}! (Reversed: ${reversedName}, Length: ${length})`;
}

module.exports = { greet };



