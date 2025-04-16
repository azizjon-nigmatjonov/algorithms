function CalculateAge (born_year) {
    const date = new Date()
    const currentYear = date.getFullYear()

    return currentYear - born_year
}

export default CalculateAge