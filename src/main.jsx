import ReactDOM from "react-dom/client";

import TodoApp from "./components/TodoApp";
import React from "react";
import '@/styles/app.css';

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
    <React.StrictMode>
        <TodoApp />
    </React.StrictMode>
);
