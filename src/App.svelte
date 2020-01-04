<script>
  import Todo from './Todo.svelte'
	let newTodo = '';
	let showCompleted = true;
	let todos = [{
		name: 'Enregistrer ce tutoriel',
		completed: false
	},
	{
		name: "Preparer ce turoriel",
		completed: true
	}]
	
	$: filteredTodos = todos.filter(t => t.completed === showCompleted ? true : t.completed)
	
	function addTodo(e){
		e.preventDefault()
		
		/*
		  Changement d'etat !!!
		*/
		
		todos = [...todos, 
			{
				name: newTodo,
				completed: false
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
</script>

<h1>Ma todolist</h1>
<label><input type="checkbox" bind:checked={showCompleted}> Afficher les taches complétées</label>
<ul>
	{#each filteredTodos as todo}
		<Todo todo={todo} on:change={(e) => changeTodo(todo, e.detail)}/>		
	{/each}
</ul>

<input type="text" bind:value={newTodo}>
<button on:click={addTodo}>
	Ajouter
</button>
{JSON.stringify(todos)}