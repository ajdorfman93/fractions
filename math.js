/**
 * Reduces a fraction
 * from https://stackoverflow.com/a/4652513
 *
 * @param numerator
 * @param denominator
 * @returns {*[]}    An array with the first element being the numerator and the second the denominator
 */
function reduce(numerator, denominator) {
	function gcd(a, b) {
		return b ? gcd(b, a % b) : a;
	}

	gcd = gcd(numerator, denominator);
	return [numerator / gcd, denominator / gcd];
}

/**
 * Returns if copying is supported by the browser
 * from https://github.com/zenorocha/clipboard.js/blob/f42b57067d461f5a8c71deec9818670f0c71d818/src/clipboard.js#L87
 *
 * @returns {boolean}
 */
function isCopySupported() {
	return document.queryCommandSupported && document.queryCommandSupported('copy');
}

var superscript = {
	'0': '⁰',
	'1': '¹',
	'2': '²',
	'3': '³',
	'4': '⁴',
	'5': '⁵',
	'6': '⁶',
	'7': '⁷',
	'8': '⁸',
	'9': '⁹',
	'+': '⁺',
	'-': '⁻',
	'=': '⁼',
	'(': '⁽',
	')': '⁾',
	'a': 'ᵃ',
	'b': 'ᵇ',
	'c': 'ᶜ',
	'd': 'ᵈ',
	'e': 'ᵉ',
	'f': 'ᶠ',
	'g': 'ᵍ',
	'h': 'ʰ',
	'i': 'ⁱ',
	'j': 'ʲ',
	'k': 'ᵏ',
	'l': 'ˡ',
	'm': 'ᵐ',
	'n': 'ⁿ',
	'o': 'ᵒ',
	'p': 'ᵖ',
	'r': 'ʳ',
	's': 'ˢ',
	't': 'ᵗ',
	'u': 'ᵘ',
	'v': 'ᵛ',
	'w': 'ʷ',
	'x': 'ˣ',
	'y': 'ʸ',
	'z': 'ᶻ',
	' ': ' '
};

var subscript = {
	'0': '₀',
	'1': '₁',
	'2': '₂',
	'3': '₃',
	'4': '₄',
	'5': '₅',
	'6': '₆',
	'7': '₇',
	'8': '₈',
	'9': '₉',
	'+': '₊',
	'-': '₋',
	'=': '₌',
	'(': '₍',
	')': '₎',
	'a': 'ₐ',
	'e': 'ₑ',
	'h': 'ₕ',
	'i': 'ᵢ',
	'j': 'ⱼ',
	'k': 'ₖ',
	'l': 'ₗ',
	'm': 'ₘ',
	'n': 'ₙ',
	'o': 'ₒ',
	'p': 'ₚ',
	'r': 'ᵣ',
	's': 'ₛ',
	't': 'ₜ',
	'u': 'ᵤ',
	'v': 'ᵥ',
	'x': 'ₓ',
	' ': ' '
};

var fractions = {
	'1/2': '½',
	'1/3': '⅓',
	'2/3': '⅔',
	'1/4': '¼',
	'3/4': '¾',
	'1/5': '⅕',
	'2/5': '⅖',
	'3/5': '⅗',
	'4/5': '⅘',
	'1/6': '⅙',
	'5/6': '⅚',
	'1/7': '⅐',
	'1/8': '⅛',
	'3/8': '⅜',
	'5/8': '⅝',
	'7/8': '⅞',
	'1/9': '⅑',
	'1/10': '⅒'
};

var slash = '⁄';

var namedFractionEntities = {
	'1/2': '&frac12;',
	'1/3': '&frac13;',
	'2/3': '&frac23;',
	'1/4': '&frac14;',
	'3/4': '&frac34;',
	'1/5': '&frac15;',
	'2/5': '&frac25;',
	'3/5': '&frac35;',
	'4/5': '&frac45;',
	'1/6': '&frac16;',
	'5/6': '&frac56;',
	'1/8': '&frac18;',
	'3/8': '&frac38;',
	'5/8': '&frac58;',
	'7/8': '&frac78;',
	'1/16': '&frac116;',
	'3/16': '&frac316;',
	'5/16': '&frac516;',
	'7/16': '&frac716;',
	'9/16': '&frac916;',
	'11/16': '&frac1116;',
	'13/16': '&frac1316;',
	'15/16': '&frac1516;',
	'1/32': '&frac132;',
	'3/32': '&frac332;',
	'5/32': '&frac532;',
	'7/32': '&frac732;',
	'9/32': '&frac932;',
	'11/32': '&frac1132;',
	'13/32': '&frac1332;',
	'15/32': '&frac1532;',
	'17/32': '&frac1732;',
	'19/32': '&frac1932;',
	'21/32': '&frac2132;',
	'23/32': '&frac2332;',
	'25/32': '&frac2532;',
	'27/32': '&frac2732;',
	'29/32': '&frac2932;',
	'31/32': '&frac3132;'
};
function getFraction(numerator, denominator) {
	numerator = numerator.trim();
	denominator = denominator.trim();

	function map(num, den) {
		if (fractions[num + '/' + den]) return fractions[num + '/' + den];
		var numOut = '', denOut = '';
		num.split('').forEach(function (val) {
			var correspondingNum = superscript[val];
			if (!correspondingNum) throw new Error();
			numOut += correspondingNum;
		});
		den.split('').forEach(function (val) {
			var correspondingNum = subscript[val];
			if (!correspondingNum) throw new Error();
			denOut += correspondingNum;
		});
		return numOut + slash + denOut;
	}

	var unicode = '';
	if (numerator && denominator) {
		unicode = map(numerator, denominator);
	}

	var simplified = '';
	if (unicode && denominator !== '0' && /^\d+$/.test(numerator) && /^\d+$/.test(denominator)) {
		simplified = reduce(numerator, denominator);
		simplified = map(simplified[0].toString(), simplified[1].toString());
		if (simplified === unicode) simplified = '';
	}

	var plain = '';
	if (numerator || denominator) {
		plain = numerator;
		if (denominator) {
			plain += '/' + denominator;
		}
	}

	return {
		plain: plain,
		unicode: unicode,
		simplified: simplified
	};
}

function updateFraction() {
	var numerator = this.numerator.trim();
	var denominator = this.denominator.trim();
	var plain = '';
	if (numerator || denominator) {
		plain = numerator;
		if (denominator) {
			plain += '/' + denominator;
		}
	}
	this.original.fractionForm = plain;
	this.unicode.plain = plain;

	try {
		var fraction = getFraction(numerator, denominator);
		this.unicode.base = fraction.unicode || plain;
		this.simplified.fractionForm = fraction.simplified;
		this.inputError = false;
	} catch (e) {
		this.unicode.base = '';
		this.simplified.fractionForm = '';
		this.inputError = true;
	}

	this.updateUnicodeOutput();
}

var app = new Vue({
	el: '#app',
	data: {
		original: {
			fractionForm: '',
			copyText: 'Copy',
			copyIcon: 'copy outline'
		},
		unicode: {
			fractionForm: '',
			base: '',
			plain: '',
			selectedEncoding: 'character',
			namedEntityAvailable: false,
			copyText: 'Copy',
			copyIcon: 'copy outline'
		},
		simplified: {
			fractionForm: '',
			copyText: 'Copy',
			copyIcon: 'copy outline'
		},
		numerator: '',
		denominator: '',
		copySupported: isCopySupported(),
		inputError: false,
		unicodeEncodings: [
			{ value: 'character', label: 'Character' },
			{ value: 'html-decimal', label: 'HTML Entity (Decimal)' },
			{ value: 'html-hex', label: 'HTML Entity (Hex)' },
			{ value: 'html-named', label: 'HTML Entity (Named)' },
			{ value: 'percent', label: 'Percent Encoding' },
			{ value: 'code-points', label: 'Unicode Code Points' },
			{ value: 'utf8', label: 'UTF-8 Bytes' },
			{ value: 'utf16', label: 'UTF-16 Code Units' },
			{ value: 'utf32', label: 'UTF-32 Code Points' },
			{ value: 'decomposition', label: 'Compatibility Decomposition' }
		]
	},
	watch: {
		numerator: updateFraction,
		denominator: updateFraction,
		'unicode.selectedEncoding': function () {
			this.updateUnicodeOutput();
		}
	},
	methods: {
		updateUnicodeOutput: function () {
			var source = this.unicode.base || this.unicode.plain;
			var plain = this.unicode.plain;
			this.unicode.namedEntityAvailable = !!(plain && namedFractionEntities[plain]);

			if (!source) {
				if (this.unicode.fractionForm) {
					this.unicode.fractionForm = '';
					this.copyReset(this.unicode);
				} else {
					this.unicode.fractionForm = '';
				}
				return;
			}

			var formatted = this.formatUnicodeValue(source, plain, this.unicode.selectedEncoding);
			if (formatted !== this.unicode.fractionForm) {
				this.unicode.fractionForm = formatted;
				this.copyReset(this.unicode);
			}
		},
		formatUnicodeValue: function (source, plain, encoding) {
			if (!source) return '';
			var codePoints = Array.from(source);

			switch (encoding) {
				case 'character':
					return source;
				case 'html-decimal':
					return codePoints.map(function (ch) {
						return '&#' + ch.codePointAt(0) + ';';
					}).join('');
				case 'html-hex':
					return codePoints.map(function (ch) {
						return '&#x' + ch.codePointAt(0).toString(16).toUpperCase() + ';';
					}).join('');
				case 'html-named':
					var named = plain && namedFractionEntities[plain];
					return named || 'Not available for this fraction';
				case 'percent':
					return encodeURIComponent(source);
				case 'code-points':
					return codePoints.map(function (ch) {
						var hex = ch.codePointAt(0).toString(16).toUpperCase();
						return 'U+' + hex.padStart(4, '0');
					}).join(' ');
				case 'utf8':
					var bytes;
					if (typeof TextEncoder !== 'undefined') {
						bytes = Array.from(new TextEncoder().encode(source));
					} else {
						var escaped = unescape(encodeURIComponent(source));
						bytes = [];
						for (var i = 0; i < escaped.length; i++) {
							bytes.push(escaped.charCodeAt(i));
						}
					}
					return bytes.map(function (byte) {
						return '0x' + byte.toString(16).toUpperCase().padStart(2, '0');
					}).join(' ');
				case 'utf16':
					var units = [];
					for (var j = 0; j < source.length; j++) {
						units.push('0x' + source.charCodeAt(j).toString(16).toUpperCase().padStart(4, '0'));
					}
					return units.join(' ');
				case 'utf32':
					return codePoints.map(function (ch) {
						return '0x' + ch.codePointAt(0).toString(16).toUpperCase().padStart(8, '0');
					}).join(' ');
				case 'decomposition':
					var normalized = source.normalize ? source.normalize('NFKD') : source;
					return Array.from(normalized).map(function (ch) {
						var hex = ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
						return ch + ' (U+' + hex + ')';
					}).join(' - ');
				default:
					return source;
			}
		},
		copySuccess: function (obj) {
			obj.copyText = 'Copied';
			obj.copyIcon = 'check';
		},
		copyFail: function (obj) {
			obj.copyText = 'Error';
			obj.copyIcon = 'exclamation triangle';
		},
		copyReset: function (obj) {
			obj.copyText = 'Copy';
			obj.copyIcon = 'copy outline';
		}
	}
});




