import type { Preview } from '@storybook/react'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'
import { theme } from '../src/theme'

const preview: Preview = {
	decorators: [withRouter],
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		layout: 'centered',
		chakra: {
			theme,
		},
		reactRouter: reactRouterParameters({}),
	},
}

export default preview
