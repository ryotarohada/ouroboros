import type { Meta, StoryObj } from '@storybook/react'
import { Href } from './index'

const meta = {
	component: Href,
	parameters: {},
} satisfies Meta<typeof Href>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
	args: {},
}
