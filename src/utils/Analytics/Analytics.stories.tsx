import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Analytics } from "./Analytics";
import README from "./README.md";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "utils/Analytics",
  component: Analytics,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    dummy: {
      name: "dummy",
      type: { name: "string", required: true },
      defaultValue: "dummy value",
      description: "Label inside",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "dummy value" },
      },
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    readme: {
      sidebar: README,
    },
  },
} as ComponentMeta<typeof Analytics>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Analytics> = (args) => (
  <Analytics {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  dummy: "dummy",
};
