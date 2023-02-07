const searchVegetableHandler = (setState, value) => {
    setState(prevState => (
        {...prevState, searchBarValue: value}
    ));
}

export default searchVegetableHandler;