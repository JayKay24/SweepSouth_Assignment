import styled from "styled-components";

const ProfilesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;

  > * {
    flex-shrink: 0;
    margin-top: 1.5em;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export { ProfilesContainer };
