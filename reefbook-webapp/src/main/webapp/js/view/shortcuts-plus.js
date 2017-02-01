/**
 * Created by serg on 16.09.16.
 */
define(['backbone.shortcuts'], function (Shortcuts) {
	var ShortcutsPlus = Shortcuts.extend({
		undelegateShortcuts: function () {
			key.deleteScope('all');
		}
	});
	return ShortcutsPlus;
});

