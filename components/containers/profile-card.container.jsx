import styled from "styled-components";

const ProfileCardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 2em;
  transition: 0.3s;
  width: 17%;
  min-width: 166px;
  padding: 7px;
  text-align: center;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2) s;
    cursor: pointer;
  }
  > .card-details {
    padding: 2px 16px;

    h4 {
      overflow: hidden;
    }
  }
  h4 {
    font-size: 1.5em;
  }
`;

export { ProfileCardContainer };
