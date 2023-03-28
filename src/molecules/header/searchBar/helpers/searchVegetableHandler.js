const searchVegetableHandler = (homePageSetState, value) => {
    homePageSetState(prevState => (
        {...prevState, searchBarValue: value}
    ));
}

export default searchVegetableHandler;