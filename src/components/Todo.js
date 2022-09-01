import styleTodo from '../styles/Todo.module.scss';

const Todo = () => {
	return (
		<div className={styleTodo.todo}>
			<div className={styleTodo.todo__check}>!</div>
			<div className={styleTodo.todo__text}>Задача</div>
			<div className={styleTodo.todo__delete}>?</div>
		</div>
	)
};

export default Todo;