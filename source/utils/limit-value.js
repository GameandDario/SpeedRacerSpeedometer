function limitValue(value, minValue, maxValue, allowedDecimals) {
    let currentValue = 0;
    if (!isNaN(value)) {
        if (!isNaN(allowedDecimals) && allowedDecimals > 0) {
            currentValue = parseFloat(value).toFixed(allowedDecimals < 4 ? parseInt(allowedDecimals) : 4);
        } else {
            currentValue = parseInt(value);
        }
    }
    return Math.min(Math.max(currentValue, minValue), maxValue);
}

export default limitValue;