/**
 * Created by serg on 19.09.16.
 */
define(['../model/menu1', 'pageablecollection'],
	function (Menu1, PageableCollection) {
	var Menu1s = PageableCollection.extend({
		// Reference to this collection's model.
		model: Menu1,
		url: PageableCollection.prototype.urlRoot() + '/routemenu'
	});
	return Menu1s;
});