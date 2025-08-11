function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phoneNumber);
}

console.log(isValidPhoneNumber("987-654-3210")); // true
console.log(isValidPhoneNumber("1234567890"));   // false
console.log(isValidPhoneNumber("987-654-321"));  // false