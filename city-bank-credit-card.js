// calculate number with left zero padding
function generateNumberWithZero(num) {
    let finalNumber = "";
    const numString = num.toString();
    const needNumberOfZero = 6 - numString.length;
    for (let i = 0; i < needNumberOfZero; i++) {
        finalNumber += '0'
    }
    return finalNumber + numString;
}

// card distribution function
function cardDistribution(data) {
    const newData = [];
    for (let i = 0; i < data.length; i++) {
        newData.push({
            "cardNumber": data[i].district.slice(0, 2).toUpperCase() +
                data[i].currentYear.toString().slice(2, 4) +
                data[i].postNo.toString().slice(0, 2) +
                data[i].birthday.toString() + generateNumberWithZero(i + 1),
            "gift": (i + 1) % 2 ? 'W' : 'R',
            "priority": data[i].priority
        })
    }


    // Sort Data
    newData.sort(
        function (a, b) {
            if (a.priority === b.priority) {
                // cardNumber is only important when priority are the same
                return a.cardNumber > b.cardNumber ? 1 : -1;
            }
            return a.priority - b.priority;
        });

    return newData;
}
// sample data
const data = [
    { name: "Mr Rashed", birthday: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2 },
    { name: "Mr Raju", birthday: 1995, currentYear: 2022, district: "Rajshahi", postNo: 1211, priority: 1 },
]
const result = cardDistribution(data);
console.log(result);