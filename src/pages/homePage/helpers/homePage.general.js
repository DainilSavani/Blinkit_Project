export const stateSetter = (homePageSetState, result) => {
    homePageSetState(prevState => (
        {...prevState, vegetableItems: result}
        )
    )
}

export const dataFetchError = () => (
    alert('something went wrong while fetching product data!!!')
);