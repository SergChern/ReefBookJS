/**
 * Created by serg on 27.04.16.
 */
define(['backbone', 'backgrid',
		'backgrid-paginator', 'backgrid-filter', 'backgrid-select-all', 'backgrid-text-cell',
		'bootstrap-modal', 'bootstrap-modalmanager', 'colResizable'],
	function (Backbone, Backgrid) {
		var Grid = Backbone.View.extend({
			el: function () {
				return this.options.elGrid;
			},
			events: {
				"click #insertrow": "insertRow",
				"click #deleterow": "deleteRow"
			},
			initialize: function () {
				var filter = new Backgrid.Extension.ClientSideFilter(
					$.extend({
						collection: this.collection.fullCollection
					}, this.options.filter.fields));
// Render the filter
				$(this.$el).append(filter.render().$el);
// Add some space to the filter and move it to the right
				filter.$el.css(this.options.filter.css);
				// Initialize a new Grid instance
				var grid = new Backgrid.Grid({
					columns: this.options.columns,
					collection: this.options.collection
				});
				// Render the grid and attach the root to your HTML document
				$(this.$el).append(grid.render().$el);
				this.render();
			},
			render: function () {
				var _self = this;
// Initialize the paginator
				var paginator = new Backgrid.Extension.Paginator($.extend({
					collection: this.collection
				}, _self.options.paginator));
// Render the paginator
				$(this.$el).append(paginator.render().$el);
				// Initialize a client-side filter to filter on the client
// mode pageable collection's cache.
				$(this.$el).append('<button id="insertrow">Insert Row</button>');
				$(this.$el).append('<button id="deleterow">Delete Row</button>');
	//+			this.fakePostback();
				return this;
			},
			insertRow: function (e) {
				this.collection.add(this.options.defaultmodel);
				$(this.$el).find('[type="search"]').
					val(this.options.defaultmodel[this.options.filter.fields]);
			},
			deleteRow: function (e) {
				if (confirm("Вы хотите удалить отмеченые записи?")) {
					for (var i in this.collection.models) {
						var musketeers = this.collection.models[i];
						if (musketeers.get('pdel')) {
							this.collection.remove(musketeers);
							musketeers.destroy({wait: true});
						}
					}
				}
			}
			/*
			render0: function () {
				var _self = this;
				_self.render();
				$(this.options.elGrid).colResizable({
					liveDrag:true,
					postbackSafe:true,
					partialRefresh:true,
					resizeMode:'flex'
				});
			},

			postbackSample: function(){
				var _self = this;
				$(_self.options.elGrid).colResizable({
					liveDrag:true,
					postbackSafe:true,
					partialRefresh:true
				});
			},

			fakePostback: function(){
				var _self = this;
				//simulate postback here
				setTimeout(function(){
					//on postback over
					_self.onPostbackOver();
				}, 700);
			},

		onPostbackOver : function(){
			var _self = this;
			_self.postbackSample();
		}
*/
		});
		return Grid;
	});