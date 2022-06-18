module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,js,png,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};