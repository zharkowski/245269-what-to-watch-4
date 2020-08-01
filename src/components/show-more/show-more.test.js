import React from "react";
import renderer from "react-test-renderer";
import {ShowMore} from "./show-more";

describe(`Render ShowMore`, () => {
  it(`Should ShowMore render correctly`, () => {
    const tree = renderer.create(
        <ShowMore handleClick={() => {}}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
