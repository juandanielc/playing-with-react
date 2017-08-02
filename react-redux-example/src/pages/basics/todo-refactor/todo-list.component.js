import React from 'react';
import Todo from  './todo.component';

export default (props) => (
		<ul>{
				props.todos.map( (t) => (
							<Todo key={t.id} 
							      onClick={() => props.onTodoClick(t.id)}
							      text={t.text} 
							      completed={t.completed}
							      />
						   )
				)
			}
		</ul>
	)