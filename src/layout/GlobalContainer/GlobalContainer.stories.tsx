import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GlobalContainer } from "./GlobalContainer";
import README from "./README.md";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "layout/GlobalContainer",
  component: GlobalContainer,
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
} as ComponentMeta<typeof GlobalContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GlobalContainer> = (args) => (
  <GlobalContainer {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  dummy: "dummy",
};
