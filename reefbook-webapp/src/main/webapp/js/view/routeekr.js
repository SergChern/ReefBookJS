/**
 * Created by serg on 19.09.16.
 */
define(['dust', 'view/ekrdot', 'pageablecollection'],
	function (Dust, EkrDot, PageableCollection) {
		var RouteEkr = EkrDot.extend({
			initialize: function () {
				this.zzz(this.options.imt, 'init');
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
			render: function () {
				var _self = this;
				// convert the Model data to JSON for templating
				//var data = JSON.stringify(_self.collection.models);
				// pass Dust the cache key for the compiled template,
				//     combine with JSON,
				//     and add a callback that gets passed the rendered HTML fragment as 'out'.
				Dust.render(this.myCompiledTemplateKey, {data : JSON.parse(data0)}, function (err, out) {
				 // place the HTML into the target DIV
					 _self.$el.html(out);
				 });
				 			// return the instance to support chaining
				return this;
			},
			initekrsuccess: function (_self, jsondata) {
				for (var row in jsondata) {
					if (jsondata[row].hasOwnProperty("dust")) {
						_self.template = jsondata[row].dust;    // or do something with it and break
					}
					else if (jsondata[row].hasOwnProperty("ekr")) {
						jsondata[row].ekr = jsondata[row].ekr.split('function').join('"function');
						jsondata[row].ekr = jsondata[row].ekr.split('};').join('"');
						_self.ekr = JSON.parse(jsondata[row].ekr);    // or do something with it and break
					}
				}
				$.find('title')[0].text = _self.ekr.title;
				this.routes = {};
				//
				// Request unpaginated URL
				_self.collection.fetch({
					success: function (response, xhr) {
						data0 = JSON.stringify(xhr);
						// pass Dust the cache key for the compiled template,
						//     combine with JSON,
						//     and add a callback that gets passed the rendered HTML fragment as 'out'.
					var prekey = PageableCollection.prototype.prekey();
					for (var m in xhr) {
							var keyroute = prekey+xhr[m].key;
							_self.routes[keyroute] = xhr[m].item;
							_self.ekr[keyroute] = {};
							_self.ekr[keyroute].elEkr = xhr[m].elekr;
							_self.ekr[keyroute].imt = xhr[m].imt;
						    _self.ekr[keyroute].shrtCut = xhr[m].shrtCut;
						}

						_self.trigger('initroutes');
					},
					error: function (errorResponse) {
//                    console.log(errorResponse)
					}
				}); // { data: { page: 'no'} }
				_self.myCompiledTemplateKey = 'ekr' + _self.options.imt;
				Dust.loadSource(Dust.compile(_self.template, _self.myCompiledTemplateKey));
			}
		});
		return RouteEkr;
	});