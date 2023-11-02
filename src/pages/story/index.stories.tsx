import type { Meta, StoryObj } from '@storybook/react'
import { StoryPage } from './index'

const meta = {
	component: StoryPage,
	parameters: {},
} satisfies Meta<typeof StoryPage>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
	args: {},
}
