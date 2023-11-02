import type { Meta, StoryObj } from '@storybook/react'
import { BasicModal } from './index'

const meta = {
	component: BasicModal,
	parameters: {},
} satisfies Meta<typeof BasicModal>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
	args: {
		isOpen: true,
		children: 'children',
	},
}
