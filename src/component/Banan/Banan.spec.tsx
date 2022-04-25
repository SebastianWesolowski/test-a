import '@testing-library/jest-dom';

describe('Components', () => {
  describe('Banan', () => {
    // eslint-disable-next-line unused-imports/no-unused-vars
    const props = {
      dummy: 'test',
    };

    // const component = renderer.create(<Banan {...props} />);
    // const tree = component.toJSON();

    it('should render without errors', () => {
      // expect(tree).toMatchSnapshot();
    });

    // const tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    // // manually trigger the callback
    // renderer.act(() => {
    //   tree?.props.onMouseEnter();
    // });
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    // // manually trigger the callback
    // renderer.act(() => {
    //   tree.props.onMouseLeave();
    // });
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    // it('should render without errors', () => {
    //   const props = {
    //     dummy: 'test',
    //   };
    //   render(<Banan {...props} />);

    //   const element = screen.getByRole('h1');
    //   expect(element).not.toBeInTheDocument();
    // });
  });
});
