define(['backbone', 'model/modeldot', 'pageablecollection'],
	function (Backbone, ModelDot, PageableCollection) {
	var GrafModel = ModelDot.extend({
		urlRoot: PageableCollection.prototype.urlRoot()+'/graf',
		defaults: {
			imt: "empty",
			rebro: "empty",
			npp: 1,
			workload: "empty",
			mask: "empty",
			id_User: 1,
			m: false,
			pdel: false,
			oldRebro: 'empty'
		},
		validate: function (attrs, options) {
			if (attrs.imt == 'empty') {
				return '4646464';
			}
		},
		initialize: function () {
			ModelDot.prototype.initialize.call(this);
			/*			var oldBackboneSync = Backbone.sync;
			 Backbone.sync = function(method, model, options) {
			 alert(method + ": " + JSON.stringify(model));
			 options.data = JSON.stringify(model);
			 options.contentType = 'application/json';
			 return oldBackboneSync.apply(this, [method, model, options]);
			 };
			 */
		}
	});
	return GrafModel;
});