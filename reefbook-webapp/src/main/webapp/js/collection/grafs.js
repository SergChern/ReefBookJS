define(['../model/graf', 'pageablecollection'], function (Graf, PageableCollection) {
	var Grafs = PageableCollection.extend({
		// Reference to this collection's model.
		model: Graf,
		url: PageableCollection.prototype.urlRoot()+ '/home'
	});
	return Grafs;
});
