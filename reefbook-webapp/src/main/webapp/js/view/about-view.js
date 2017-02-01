define(['backbone', 'text!template/about.dust', 'dust'],
	function (Backbone, AboutTemplate, Dust) {
		// reefbookjs
		var AboutView = Backbone.View.extend({
			// Define view template
			template: AboutTemplate,
			el: '#main',
			initialize: function () {
				// Render the view
				var _self = this;
				this.myCompiledTemplateKey = 'about00';
//            dust.loadSource(dust.compile('<div id="main"><h1>Hello1</h1></div>',this.myCompiledTemplateKey));
				Dust.loadSource(Dust.compile(this.template, this.myCompiledTemplateKey));
				this.render();
			},
			render: function () {
				// convert the Model data to JSON for templating
				var data = {};//this.model.toJSON();
				// pass Dust the cache key for the compiled template,
				//     combine with JSON,
				//     and add a callback that gets passed the rendered HTML fragment as 'out'.
				var _self = this;
				Dust.render(this.myCompiledTemplateKey, data, function (err, out) {
					// place the HTML into the target DIV
					_self.$el.empty();
					_self.$el.html(out);
				});
				// return the instance to support chaining
				return this;
			}
		});
		return AboutView;
	});