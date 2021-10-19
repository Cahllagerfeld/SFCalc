const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			spacing: {
				navbar: '117px'
			},
			fontFamily: {
				primary: ['Raleway', 'sans-serif']
			},
			colors: {
				dark: 'var(--dark)',
				'primary-text': 'var(--primary-text)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				tertiary: 'var(--tertiary)'
			}
		}
	},

	plugins: []
};

module.exports = config;
