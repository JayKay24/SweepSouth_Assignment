import styled from "styled-components";

const NavigationContainer = styled.nav`
  display: flex;
  padding-left: 0;

  > * {
    margin-top: 0;

    &.nav-right {
      margin-left: auto;
    }
  }

  a {
    background-color: black;
    color: white;
    text-decoration: none;
  }
`;

export default NavigationContainer;
