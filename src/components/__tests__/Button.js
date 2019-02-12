import React from "react"
import renderer from "react-test-renderer"

// components
import Button from "../Button"

describe("Button component", () => {
  it("renders with default props", () => {
    const tree = renderer
      .create(<Button>Default primary theme</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders with secondary theme", () => {
    const tree = renderer
      .create(
        <Button theme="secondary" onPress={() => null}>
          Secondary theme
        </Button>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders with disabled theme", () => {
    const tree = renderer
      .create(
        <Button theme="disabled" onPress={() => null}>
          Disabled theme
        </Button>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders with custom styles", () => {
    const tree = renderer
      .create(
        <Button
          style={{ backgroundColor: "red" }}
          textStyle={{ color: "yellow", fontSize: 12 }}
        >
          Button with custom styles
        </Button>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
