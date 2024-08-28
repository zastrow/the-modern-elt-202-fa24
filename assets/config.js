// More info about initialization & config:
// - https://revealjs.com/initialization/
// - https://revealjs.com/config/
Reveal.initialize({
	width: 960,
	height: 540,
	margin: 0.2,

	hash: true,
	controls: false,
	progress: false,
	center: false,
	slideNumber: true,
	hashOneBasedIndex: true,
	display: 'grid',
	hideInactiveCursor: true,
	hideCursorTime: 2000,
	transitionSpeed: 'fast',
	transition: 'fade',
	backgroundTransition: 'none',

	// Learn about plugins: https://revealjs.com/plugins/
	plugins: [
		RevealMarkdown,
		RevealHighlight,
		RevealNotes
	]
});
