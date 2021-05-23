import styled from "styled-components";

const ProfileDetailsContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 2em auto;
  padding: 10px;
  width: 60%;

  > .avatar {
    text-align: center;
  }

  > code {
    background-color: #dadde1;
    overflow-x: auto;
  }
`;

export default ProfileDetailsContainer;
