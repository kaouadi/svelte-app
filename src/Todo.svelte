<script>
	
import {createEventDispatcher} from 'svelte';
export let todo;
const dispatch = createEventDispatcher();
	
function onInput(e){
	console.log(e);
	dispatch('change', {name: e.target.value})
}
	
function onCheck(){
		dispatch('change', {completed: !todo.completed})
}

</script>

<li>
	<input type="checkbox" checked={todo.completed} on:change="{onCheck}">
	<input type="text" value={todo.name} on:input={onInput}>
</li>