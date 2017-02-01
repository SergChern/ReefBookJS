// Set the require.js configuration for your application.
require.config({
	shim: {
		'dust': {
			exports: 'dust'
		},
		'dust-helpers': {
			deps: ['dust']
		},
		// This requires dust-helpers because we are adding
		// to that
		'dust-extensions': {
			deps: ['dust', 'dust-helpers']
		},
		'underscore': {
			exports: '_'
		},
		'backgrid': {
			deps: [
				'backbone'
			],
			exports: 'backgrid'
		},
		lunr: {
			exports: 'lunr'
		},
		'backbone-pageable': {
			exports: 'backbone-pageable'
		},
		'underscore-string': {
			deps: [
				'underscore'
			]
		},
		'backbone': {
			deps: [
				'underscore',
				'underscore-string',
				'jquery'
			],
			exports: 'Backbone'
		},
		'backbone-queryparams': {
			deps: [
				'backbone'
			],
			exports: 'Backbone'
		},
		'backbone-datagrid': {
			deps: [
				'backbone'
			],
			exports: 'Backbone.Datagrid'
		},
		'backbone.shortcuts': {
			deps: [
				'backbone',
				'underscore',
				'keymaster'
			],
			exports: 'Backbone.Shortcuts'
		},
		'backbone.paginator': {
			deps: [
				'backbone'
			],
			exports: 'Backbone.Paginator'
		},
		'backgrid-paginator': {
			deps: [
				'underscore',
				'backbone',
				'backgrid',
				'backbone.paginator',
				'backbone-pageable'
			],
			exports: 'backgrid-paginator'
		},
		'backgrid-filter': {
			deps: [
				'underscore',
				'backbone',
				'backgrid',
				'lunr'
			],
			exports: 'backgrid-filter'
		},
		'backgrid-select-all': {
			deps: [
				'underscore',
				'backbone',
				'backgrid'
			],
			exports: 'backgrid-select-all'
		},
		'backgrid-text-cell': {
			deps: [
				'underscore',
				'backgrid'
			],
			exports: 'backgrid-text-cell'
		},
		'colResizable': {
			deps: [
				'jquery'
			],
			exports: 'colResizable'
		},
		'grid': {
			exports: 'grid'
		},
		'shortcuts-plus': {
		exports: 'shortcuts-plus'
		},
		'ekrdot': {
			exports: 'ekrdot'
		},
		'menu1s': {
			exports: 'menu1s'
		},
		'routeekr': {
			exports: 'routeekr'
		},
		'app-router': {
			exports: 'app-router'
		},
		'pageablecollection': {
			exports: 'pageablecollection'
		},
		'bootstrap': {
			deps: [
				'jquery'
			]
		},
		'bootstrap-modal': {
			deps: [
				'jquery'
			],
			exports: 'bootstrap-modal'
		},
		'bootstrap-modalmanager': {
			deps: [
				'jquery'
			],
			exports: 'bootstrap-modalmanager'
		},
		'backbone-associations': {
			deps: [
				'backbone'
			]
		},
		'keymaster': {
			exports: 'key'
		},
		'async': {
			exports: 'async'
		}
	},
	// Libraries
	paths: {
		jquery: 'lib/jquery',
		underscore: 'lib/underscore',
		'underscore-string': 'lib/underscore-string',
		backbone: 'lib/backbone',
		backgrid: 'lib/backgrid',
		lunr: 'lib/lunr',
		'backgrid-paginator': 'lib/backgrid-paginator',
		'backgrid-filter': 'lib/backgrid-filter',
		'backgrid-select-all': 'lib/backgrid-select-all',
		'backgrid-text-cell': 'lib/backgrid-text-cell',
		'backbone-pageable': 'lib/backbone-pageable',
		'bootstrap-modal': 'lib/bootstrap-modal',
		'bootstrap-modalmanager': 'lib/bootstrap-modalmanager',
		'colResizable': 'lib/colResizable',
		grid: 'view/grid',
		'shortcuts-plus': 'view/shortcuts-plus',
		ekrdot: 'view/ekrdot',
		menu1s: 'collection/menu1s',
		routeekr: 'view/routeekr',
		'app-router': 'router/app-router',
		pageablecollection: 'collection/pageablecollection',
		reefbookjs: 'lib/reefbookjs/reefbookjs',
		text: 'lib/text',
		i18n: 'lib/i18n',
		'bootstrap': 'lib/bootstrap',
		'backbone-validation-orig': 'lib/backbone-validation',
		'backbone-validation': 'lib/reefbookjs/backbone-validation-ext',
		'dust': 'lib/dust-full-1.1.1',
		'dust-helpers': 'lib/dust-helpers-1.1.1',
		'dust-extensions': 'lib/dust-extensions',
		'backbone-queryparams': 'lib/backbone-queryparams',
		'backbone-datagrid': 'lib/backbone-datagrid',
		'backbone.paginator': 'lib/backbone.paginator',
		'backbone-associations': 'lib/backbone-associations',
		'backbone-localstorage': 'lib/backbone-localstorage',
		'backbone.shortcuts': 'lib/backbone.shortcuts',
		async: 'lib/async',
		keymaster: 'view/keymaster_wap',
		moment: 'lib/moment',
		template: '../template',
		json2: 'lib/json2',
		console: 'lib/reefbookjs/console'
	}
});
// Load our app module and pass it to our definition function
require(['console', 'app']);
