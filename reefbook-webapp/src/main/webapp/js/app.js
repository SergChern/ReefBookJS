define(['router/app-router', 'pageablecollection'],
	function (AppRouter, PageableCollection) {
	window.rootUrl = PageableCollection.prototype.urlRoot();
	new AppRouter({imt: '000', elEkr: '#routs'});
});