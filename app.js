new Vue({  //Declaring the app, its components, the data, and the methods
	el: '#vue-app',
	data: data,
	methods: methods(),
})
function data(){ //What variables will be used
	return {
		pageToShow: 'home'
	};
}
function methods(){
	return { //What functions will be used
		showPage
	}
	function showPage(page){ //Declaring the showPage function and what it will do
		var vm = this;
		vm.pageToShow = page;
	}
}