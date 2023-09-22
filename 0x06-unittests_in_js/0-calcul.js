// Calculate Number

function calculateNumber(a, b) {
    // Arrondir les valeurs a et b
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    return roundedA + roundedB;
}

module.exports = calculateNumber;
