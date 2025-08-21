function greet(name) {
    // Trim spaces from start and end
    let cleanName = name.trim();
    
    // Capitalize first letter of the first word
    cleanName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1).toLowerCase();
    
    // Reverse the name
    let reversedName = cleanName.split("").reverse().join("");
    
    // Count length of name
    let length = cleanName.length;
    
    // Count words
    let wordCount = cleanName.split(/\s+/).filter(Boolean).length;
    
    return `Hello, ${cleanName}! (Reversed: ${reversedName}, Length: ${length}, Words: ${wordCount})`;
}

module.exports = { greet };



