import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Tooltip> = {
  title: 'Example/Tooltip',
  component: Tooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    //fontColor: { control: 'color' },
    sizes: {
      control: {
        type: 'array',
        items: {
          type: 'number',
        },
      },
      defaultValue: [
        8,
        9,
        10,
        11,
        12,
        14,
        16,
        18,
        20,
        22,
        24,
        26,
        28,
        36,
        48,
        72,
      ],
    },
    fonts: {
      control: {
        type: 'array',
        items: {
          type: 'number',
        },
      },
      defaultValue: [
        8,
        9,
        10,
        11,
        12,
        14,
        16,
        18,
        20,
        22,
        24,
        26,
        28,
        36,
        48,
        72,
      ],
    }
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FontEditor: Story = {
  args: {
    label: 'Hello world',
    withColor: true,
    withDecoration: true,
    withSize: true
  },
};
