import styled from "styled-components";

export const Tab = styled.span`
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  height: 100%;
  position: relative;
padding:15px;
  color: ${({ isslected }) => (isslected ? "black" : "#767676")};

  &::after {
    content: "";
    
 width:100%;
    border-bottom: 2px solid ${({ isslected }) => (isslected ? "black" : "transparent")};
    position: absolute;
    bottom :0;
   left:0;
  }
`;


export default Tab;






