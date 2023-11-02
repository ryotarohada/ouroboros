import type { Meta, StoryObj } from '@storybook/react'
import { HomeHeader } from './index'

const meta = {
	component: HomeHeader,
	parameters: {},
} satisfies Meta<typeof HomeHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
	args: {},
}
