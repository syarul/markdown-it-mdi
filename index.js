'use strict';

var Plugin = require('markdown-it-regexp');

module.exports = function fontawesome_plugin(md) {
	md.use(Plugin(
		/\:mdi-([\w\-]+)\:/,
		function (match, utils) {
			return '<i class="mdi mdi-' + utils.escape(match[1]) + '"></i>';
		}
	));
};