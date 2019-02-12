import React from "react"
import renderer from "react-test-renderer"

import { Text } from "react-native"

// components
import ScrollableContainer from "../ScrollableContainer"

describe("ScrollableContainer component", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <ScrollableContainer>
          <Text>Hi</Text>
        </ScrollableContainer>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  test("renders with a centered content", () => {
    const tree = renderer
      .create(
        <ScrollableContainer centerContent>
          <Text>Hi</Text>
        </ScrollableContainer>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
