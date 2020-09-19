import { HTMLAttributes, ShallowWrapper } from "enzyme";

const findByTestAttr = (
  component: ShallowWrapper<any, Readonly<Record<string, unknown>>>,
  attr: string
): ShallowWrapper<
  HTMLAttributes,
  any,
  React.Component<Record<string, unknown>, Record<string, unknown>, any>
> => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export default findByTestAttr;
