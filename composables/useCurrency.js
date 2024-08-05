export const useCurrency = (amount) => {
    const currency = computed(() => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'EUR'
        }).format(isRef(amount) ? amount.value : amount)
    })

    return {
        currency
    }
}