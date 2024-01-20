import { Provider } from "react-redux";
import { ReactDOM } from "react";
import App from "../App";
import { configureStore } from "@reduxjs/toolkit";
import { currentUser } from './reducers';

const store = configureStore(( reducer = currentUser));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"),
);