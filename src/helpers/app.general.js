export const stateSetter = (setState, result) => {
    setState(prevState => (
        {...prevState, vegetableItems: result}
        )
    )
}

export const dataFetchError = () => (
    alert('something went wrong while fetching product data!!!')
);