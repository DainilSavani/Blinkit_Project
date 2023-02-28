import React from "react";

const Context = React.createContext();

const ValueProvider = Context.Provider;
const ValueConsumer = Context.Consumer;

export {ValueProvider, ValueConsumer};