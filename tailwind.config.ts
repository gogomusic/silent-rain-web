import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
	darkMode: 'class',
	content: ['./app/**/*.{js,ts,jsx,tsx}'],
	plugins: [typography],
	theme: {
		screens: {
			pc: '1366px',
			md: '768px',
		},
		extend: {
			zIndex: {
				1: '1',
			},
			maxWidth: {
				pc: '1366px',
				md: '768px',
			},
			spacing: {
				pc: '1366px',
				md: '768px',
			},
			flex: {
				2: '2',
				3: '3',
				4: '4',
				5: '5',
				6: '6',
				7: '7',
				8: '8',
				9: '9',
			},
		},
	},
};

export default config;
