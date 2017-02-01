/**
 * Copyright (C) 2012 Connecture
 *
 * This is going to be automatically added to the dust helpers conext, I am not make this it's own define because of this. This will have to be shimmed to be added to your project
 */
define(function (require) {
	'use strict';
	var dust = require('dust');
	require('dust-helpers');
	// Add your helpers here
	// Example of how to add helpers
	// dust.helpers['test'] = function(chunk, context, bodies, params) {
	//	
	// }
	dust.helpers.iter = function (chk, ctx, bodies) {
		var obj = ctx.current();
		var entityCount = 1;
		for (var k in obj) {
			if (obj.hasOwnProperty(k)) {
				chk = chk.render(bodies.block, ctx.push({
					count: entityCount,
					key: k,
					value: obj[k]
				}));
				entityCount++;
			}
		}
		return chk;
	};
	dust.helpers.contains = function (chk, ctx, bodies, params) {
		if (typeof params.setKey === "string" && (typeof params.value === "string" || typeof params.value === "function")) {
			var key = params.setKey,
				value = params.value;
			if (typeof value === "function") {
				value = dust.helpers.tap(value, chk, ctx);
			}
			var obj = ctx.get(key);
			var contains = false;
			for (var k in obj) {
				if (obj[k] == value) {
					contains = true;
					break;
				}
			}
			if (contains) {
				chk = chk.render(bodies.block, ctx);
			} else {
				chk = chk.render(bodies['else'], ctx);
			}
		}
		return chk;
	};
	/*
	 * Find a label value from a message key by digging through _messages,
	 * which is a map of application and language-specific keys from metadata.
	 */
	dust.helpers.lang = function (chunk, context, bodies, params) {
		var returnVal = params.key; // be default, return the key as the label value
		if (context.get("_messages")) {
			if (params.key && (typeof params.key === "string")) {
				var keyFound = false;
				if (params.namespace && (typeof params.namespace === "string")) {
					var combinedKey = params.namespace + "-" + params.key;
					if (context.get("_messages")[combinedKey]) {
						keyFound = true;
						returnVal = context.get("_messages")[combinedKey];
					}
				}
				if (!keyFound) {
					if (context.get("_messages")[params.key]) {
						returnVal = context.get("_messages")[params.key];
					}
				}
			}
		}
		return chunk.write(returnVal);
	};
	dust.helpers.formatDate = function (chunk, context, bodies, params) {
		var value = dust.helpers.tap(params.value, chunk, context),
			timestamp,
			month,
			date,
			year;
		timestamp = new Date(value);
		month = timestamp.getMonth() + 1;
		date = timestamp.getDate();
		year = timestamp.getFullYear();
		return chunk.write(month + '/' + date + '/' + year);
	};
	return dust;
});