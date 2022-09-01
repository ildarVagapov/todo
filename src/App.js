// import React from "react";
import Todo from "./components/Todo";

function App() {
	return (
		<div className="App">
			<div className="todo">
				<div className="todo__container">
					<h1 className="todo__title">
						Todo List
					</h1>
					<Todo />
					<Todo />
					<Todo />
				</div>
			</div>
		</div>
	);
}

export default App;
