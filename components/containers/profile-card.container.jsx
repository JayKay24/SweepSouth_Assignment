import styled from "styled-components";

const ProfileCardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 15%;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2) s;
    cursor: pointer;
  }

  > .card-details {
    padding: 2px 16px;
  }
`;

export default ProfileCardContainer;
