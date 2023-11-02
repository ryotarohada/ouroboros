import type { Meta, StoryObj } from '@storybook/react'
import { BasicButton } from './index'

const meta = {
	component: BasicButton,
	parameters: {},
} satisfies Meta<typeof BasicButton>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
	args: {
		children: 'click me',
	},
}
