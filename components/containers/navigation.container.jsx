import styled from "styled-components";

const NavigationContainer = styled.nav`
  display: flex;
  padding-left: 0;
  font-size: 20px;

  > * {
    margin-top: 0;

    &.nav-right {
      color: white;
      margin-left: auto;
      margin-right: 2rem;

      > input {
        display: inline-block;
        height: 38px;
      }

      > .nav-search {
        display: inline-block;
        margin-left: 1rem;
      }
    }
  }

  > .home-link {
    color: white;
    display: inline-block;
    text-decoration: none;
    margin-left: 2rem;
  }
`;

export default NavigationContainer;
