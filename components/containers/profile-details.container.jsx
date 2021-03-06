import styled from "styled-components";

const ProfileDetailsContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 2em auto;
  min-width: 550px;
  padding: 10px;
  width: 60%;
  > .avatar {
    text-align: center;
  }
  > .json-output {
    > pre {
      background-color: #dadde1;
      overflow-x: auto;
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export { ProfileDetailsContainer };
