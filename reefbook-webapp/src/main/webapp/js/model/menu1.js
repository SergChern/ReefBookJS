/**
 * Created by serg on 19.09.16.
 */
define(['backbone', 'model/modeldot', 'pageablecollection'],
	function (Backbone, ModelDot, PageableCollection) {
	var Menu1Model = ModelDot.extend({
		urlRoot: PageableCollection.prototype.urlRoot()+'/menu1',
		validate: function (attrs, options) {
		},
		initialize: function () {
			ModelDot.prototype.initialize.call(this);
		}
	});
	return Menu1Model;
});