import App from './App.svelte';

var app = new App({
	target: document.body,
	props: {

		todos :[{
			name: 'Enregistrer ce tutoriel',
			completed: false,
			id: 0
		},
		{
			name: "Preparer ce turoriel",
			completed: true,
			id: 2
		}]

	}
});
