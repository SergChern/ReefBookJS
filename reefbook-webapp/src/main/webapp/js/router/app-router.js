define(['backbone', 'view/about-view', '../view/ekrdot', '../view/routeekr', 'view/shortcuts-plus'],
	function (Backbone, AboutView, EkrDot, RouteEkr, ShortcutsPlus) {
		var AppRouter = Backbone.Router.extend({
			initialize: function () {
				routeEkr = new RouteEkr({imt: arguments[0].imt, elEkr: arguments[0].elEkr});
				this.listenToOnce(routeEkr, 'initroutes', this.initfunction);
				_.extend(this, new ShortcutsPlus);
				Backbone.history.start({pushState: true, root: "/"});
				$(window.document).on('click', 'a[href]:not([data-bypass])', function (evt) {
					var protocol = this.protocol + '//';
					var href = this.href;
					href = href.slice(protocol.length);
					href = href.slice(href.indexOf("/") + 1);
					if (href.slice(protocol.length) !== protocol) {
						evt.preventDefault();
						Backbone.history.navigate(href, true);
					}
				});
			},
			initfunction: function () {
				this.routes = routeEkr.routes;
				this.off();
				this._bindRoutes();
				this.shortcuts = {};
				for (var key in this.routes) {
					if (routeEkr.ekr[key].imt == null) continue;
					var param = "this.upView({";
					for (var item in routeEkr.ekr[key]) {
						param += item + ": '" + routeEkr.ekr[key][item] + "',";
					}
					param = param.substring(0, param.length - 1) + "})";
					this.on('route:' + routeEkr.routes[key], new Function(param));
					if (routeEkr.ekr[key].shrtCut == null) continue;
					this.shortcuts[routeEkr.ekr[key].shrtCut] = new Function(param);
				}

				this.delegateShortcuts();
			},
			upView: function (point) {
				if (this.currentView != undefined) {
					this.currentView.remove();
				}
				this.currentView = new EkrDot(point);
			}
		});
		return AppRouter;
	});