import type { Meta, StoryObj } from "@storybook/react";
import { HomePage } from "./index";

const meta = {
  component: HomePage,
  parameters: {},
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
