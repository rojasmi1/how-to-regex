

// Replacing JSON characters to easily convert it into TS Model


const replaseProps = /"(.+)":/
const replaceStringVals = /:\s*"(.+)"/
const replaceNumberVals = /:\s*(\d+(?:.\d+)?)/
const replaseBooleanVals = /:\s*(true|false)/

