import ChakraButton from '@/components/Example/ChakraButton';

const meta = {
  title: 'Example/ChakraButton',
  component: ChakraButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primaryFilled', 'primaryOutline'],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      options: ['sm', 'lg'],
      control: { type: 'select' },
    },
    onClick: { action: 'onClick' },
  },
};

export default meta;

export const Primary = {
  args: {
    label: 'Button',
  },
};
