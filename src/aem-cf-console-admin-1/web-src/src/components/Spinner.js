/*
 * <license header>
 */

import React from "react";
import {
  defaultTheme,
  Provider,
  Content,
  ProgressCircle,
  Flex
} from "@adobe/react-spectrum";

export default function Spinner(props) {
  return (
    <Provider theme={defaultTheme} colorScheme='light'>
      <Flex alignSelf="center" height="300px">
        <Content>
          <ProgressCircle justifySelf="center" size="L" aria-label="Loading…" isIndeterminate />
        </Content>
      </Flex>
    </Provider>

  );
}