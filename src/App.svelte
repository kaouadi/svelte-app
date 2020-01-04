<script>
  import Todo from './Todo.svelte'
	let newTodo = '';
	let showCompleted = true;
	export let todos ;
	
	$: filteredTodos = todos.filter(t => showCompleted === true ? true : t.completed === false)
	
	function addTodo(e){
		e.preventDefault()
		
		/*
		  Changement d'etat !!!
		*/
		
		todos = [...todos, 
			{
				name: newTodo,
				completed: false,
				id: Date.now()
			}
		];
		newTodo = ''

	}
	
	function changeTodo(todo, detail){
		console.log(detail)
		todos = todos.map(t => {
			if(t === todo){
					 return {...todo, ...detail}
			}
			 return t
		 })
	}

	function deleteTodo(todo){
	
		todos = todos.filter(t => t !== todo)
	
	}
</script>

<h1>Ma todolist</h1>
<label><input type="checkbox" bind:checked={showCompleted}> Afficher les taches complétées</label>
<ul>
	{#each filteredTodos as todo (todo.id) }
		<Todo todo={todo} 
			on:delete={() => deleteTodo(todo)} 
			on:change={(e) => changeTodo(todo, e.detail)}/>		
	{/each}
</ul>

<input type="text" bind:value={newTodo}>
<button on:click={addTodo}>
	Ajouter
</button>
{JSON.stringify(todos)}