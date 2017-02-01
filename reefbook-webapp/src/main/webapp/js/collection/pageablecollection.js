/**
 * Created by serg on 29.04.16.
 */

define(['backbone-pageable'], function (BackbonePageable) {
	var PageableCollection = BackbonePageable.extend({
		urlRoot: function () {
			if (window.rootUrl === undefined) {
				var kk = window.location.pathname.split('/');

				if (kk.length > 2) {
					kk[2]=kk[1];
				}
				else {
					kk.splice(1,1);
				}

				var hh = kk.join('/');
				window.rootUrl = 'http://'+window.location.hostname+':'+window.location.port+hh;

				return window.rootUrl;
			}
			else {
				return window.rootUrl;
			}
		},
		prekey: function () {
			var kk = window.location.pathname.split('/');
			if (kk.length > 2) {
				return kk[1]+"/";
			}
			else {
				return "";
			}
		},
		state: {
			pageSize: 15,
			sortKey: "updated",
			order: 1
		},
		mode: "client", // page entirely on the client side
		// You can remap the query parameters from `state` keys from
		// the default to those your server supports
		queryParams: {
			totalPages: null,
			totalRecords: null,
			sortKey: "sort",
			order: "direction",
			directions: {
				"-1": "asc",
				"1": "desc"
			}
		}
		/*
		 parse: function(response) {
		 return response;
		 }
		 */
	});
	return PageableCollection;
});

