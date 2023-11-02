import type { Meta, StoryObj } from '@storybook/react'
import { StoryFeature } from './index'

const meta = {
	component: StoryFeature,
	parameters: {},
} satisfies Meta<typeof StoryFeature>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
	args: {},
}
