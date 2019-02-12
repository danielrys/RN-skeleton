import React from "react"
import renderer from "react-test-renderer"

import { Text } from "react-native"

// components
import Container from "../Container"

test("renders correctly", () => {
  const tree = renderer
    .create(
      <Container>
        <Text>Hi</Text>
      </Container>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
