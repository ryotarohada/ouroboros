import type { Meta, StoryObj } from '@storybook/react'
import { HomeFeature } from './index'

const meta = {
	component: HomeFeature,
	parameters: {},
} satisfies Meta<typeof HomeFeature>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
	args: {},
}
