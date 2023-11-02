import type { Meta, StoryObj } from '@storybook/react'
import { DefaultLayout } from './index'

const meta = {
	component: DefaultLayout,
	parameters: {},
} satisfies Meta<typeof DefaultLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
	args: {},
}
