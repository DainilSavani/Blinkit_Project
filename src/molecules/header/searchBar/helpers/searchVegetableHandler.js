const searchVegetableHandler = (parentSetState, value) => {
    parentSetState(prevState => (
        {...prevState, searchBarValue: value}
    ));
}

export default searchVegetableHandler;