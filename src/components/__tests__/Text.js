import React from "react"
import renderer from "react-test-renderer"

import Text from "../Text"

describe("Text component", () => {
  it("renders with default props", () => {
    const tree = renderer.create(<Text>Default text</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders as bold", () => {
    const tree = renderer.create(<Text bold>Default bold text</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders with specified color and size", () => {
    const tree = renderer
      .create(
        <Text color="yellow" size={20}>
          Text with defined size and color
        </Text>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders with custom styles", () => {
    const tree = renderer
      .create(
        <Text style={{ color: "red", fontSize: 12 }}>
          Text with custom style
        </Text>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
