/**
 * Created by serg on 05.05.16.
 */

define(['backbone'], function (Backbone) {
	var ModelDot = Backbone.Model.extend({
		url: function () {
			if (this.id == undefined) {
				return this.urlRoot + 'ins';
			}
			else {
				return this.urlRoot + '/id=' + this.id;
			}
		},
		initialize: function () {
			/*			var oldBackboneSync = Backbone.sync;
			 Backbone.sync = function(method, model, options) {
			 alert(method + ": " + JSON.stringify(model));
			 options.data = JSON.stringify(model);
			 options.contentType = 'application/json';
			 return oldBackboneSync.apply(this, [method, model, options]);
			 };
			 */
			Backbone.Model.prototype.initialize.apply(this, arguments);
			this.on("change", function (model, options) {
//				if (options && options.save === false) return;
				var param = {};
				if (model.isValid()) {
					if (model.isNew()) {
						param = {type: 'POST'};
					}
					else {
						param = {patch: true};
					}
					model.save(null, param, {
						success: function (model, response) {
							console.log("success");
						},
						error: function (model, response) {
							console.log("error");
						}
					});
				}
			});
		}
	});
	return ModelDot;
});
