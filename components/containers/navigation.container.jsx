import styled from "styled-components";

const NavigationContainer = styled.nav`
  display: flex;
  padding-left: 0;
  font-size: 20px;
  > * {
    margin-top: 0;
  }

  > {
    &.nav-right {
      color: white;
      display: inline-block;
      margin-left: auto;
      margin-right: 2rem;
      > input {
        display: inline-block;
        height: 38px;
      }
    }
  }

  .home-link {
    color: white;
    display: inline-block;
    text-decoration: none;
    margin-left: 2rem;
  }
`;

export default NavigationContainer;
