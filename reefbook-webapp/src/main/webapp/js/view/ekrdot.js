/**
 * Created by serg on 29.04.16.
 */
define(['backbone', 'dust', 'view/grid', 'router/zzz', 'view/shortcuts-plus', 'pageablecollection'],
	function (Backbone, Dust, Grid, ZZZ, ShortcutsPlus, PageableCollection) {
		var EkrDot = Backbone.View.extend({
			el: function () {
				return this.options.elEkr;
			},
			shortcuts: {
				'shift+f10': 'updateOnEnter'
			},
			initialize: function () {
				this.zzz(this.options.imt, 'init');
				_.extend(this, new ShortcutsPlus);
				// Render the view when the collection is retreived from the server
				this.listenTo(this.collection, 'sync', this.render);
				var _self = this;
				$.ajax({
					dataType: 'json',
					url: rootUrl+'/go/' + _self.options.imt,
					success: function (jsondata) {
						_self.initekrsuccess(_self, jsondata);
					}
				});
			},
			remove: function () {
				this.undelegateShortcuts();
				this.undelegateEvents();
			},
			render: function () {
				var _self = this;
				// convert the Model data to JSON for templating
				var data = JSON.stringify(_self.collection.models[0]);
				// pass Dust the cache key for the compiled template,
				//     combine with JSON,
				//     and add a callback that gets passed the rendered HTML fragment as 'out'.
				Dust.render(this.myCompiledTemplateKey, JSON.parse(data), function (err, out) {
					// place the HTML into the target DIV
					_self.$el.html(out);
				});
				// return the instance to support chaining
				this.initfunction();
				this.delegateEvents(this.ekr.events);
				if (this.ekr.shortcuts != undefined) {
					for (var key in this.ekr.shortcuts) {
						this.shortcuts[key] = this.ekr.shortcuts[key];
					}
				}
				this.delegateShortcuts();
				for (var i in this.grid) {
					_self.$el.find('#updot')
						.append('<div id="' + this.grid[i][0].elGrid.substring(1) + '">');
					var Curgrid = new Grid({
						collection: this.collection,
						defaultmodel: this.options.attrmodel,
						columns: this.grid[i][0].columns,
						elGrid: this.grid[i][0].elGrid,
						paginator: this.grid[i][0].paginator,
						filter: this.grid[i][0].filter
					});
				}
				return this;
			},
			initekrsuccess: function (_self, jsondata) {
				for (var row in jsondata) {
					if (jsondata[row].hasOwnProperty("dust")) {
						_self.template = jsondata[row].dust;
					}
					else if (jsondata[row].hasOwnProperty("ekr")) {
						jsondata[row].ekr = jsondata[row].ekr.split('function').join('"function');
						jsondata[row].ekr = jsondata[row].ekr.split('};').join('"');
						_self.ekr = JSON.parse(jsondata[row].ekr);
					}
					else if (jsondata[row].grid == undefined) {
						_self.grid = {};
					}
					else {
						_self.grid = JSON.parse(jsondata[row].grid);
					}
				}

				// Request unpaginated URL
				_self.collection.fetch({
					success: function (response, xhr) {
//                    console.log(response);
					},
					error: function (errorResponse) {
//                    console.log(errorResponse)
					}
				}); // { data: { page: 'no'} }
				_self.myCompiledTemplateKey = 'ekr' + _self.options.imt;
				Dust.loadSource(Dust.compile(_self.template, _self.myCompiledTemplateKey));
			},
			initfunction: function () {
				var data = this.ekr.events;
				for (var key in data) {
					if (data[key].indexOf('function') > -1) {
						data[key] = data[key].split('function(').join('');
						var ind = data[key].indexOf(') {');
						var param = data[key].substring(0, ind);
						data[key] = data[key].split(param + ') {').join('');
						if (param == '') {
							data[key] = new Function(data[key]);
						}
						else {
							data[key] = new Function(param, data[key]);
						}
					}
				}
			},
			zzz: function (imt, rebro) {
				if (_.isFunction(ZZZ[imt][rebro])) {
					ZZZ[imt][rebro](this);
				}
				else
				if (_.isFunction(ZZZ[imt]['otherwise'])) {
					ZZZ[imt]['otherwise'](this);
				}
/*
				else
				if (develop) {
					alert('Нет рекции на событие '+rebro+' для точки '+imt);
				}
*/
			},
			updateOnEnter: function (e) {
				alert('imt1=' + this.options.imt);
			}
		});
		return EkrDot;
	});