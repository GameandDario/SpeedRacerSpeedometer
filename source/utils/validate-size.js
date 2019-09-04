function validateSize(current, original) {
    let currentSize = original;
    if (!isNaN(current)) {
        currentSize = parseInt(current);
    }
    return currentSize;
}

export default validateSize;