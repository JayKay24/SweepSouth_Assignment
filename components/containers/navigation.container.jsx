import styled from "styled-components";

const NavigationContainer = styled.nav`
  display: flex;
  background-color: #f2f2f3;
  padding-left: 0;
  font-size: 20px;
  height: 60px;

  > * {
    margin-top: 0;
  }

  > {
    &.nav-right {
      display: inline-block;
      margin-left: auto;
      margin-right: 2rem;
      padding: 5px 0;

      > input,
      select {
        display: inline-block;
        height: 38px;

        &.profile-quantity {
          width: 40px;
        }
      }
    }
  }

  .home-link {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    margin-left: 2rem;
    width: 60px;

    &.active {
      background-color: black;
      color: white;
    }
  }
`;

export { NavigationContainer };
