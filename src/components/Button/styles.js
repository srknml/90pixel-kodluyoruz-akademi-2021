import styled from "styled-components";

export const DefaultButton = styled.button`
    border-radius: 6px;
    width: ${(props) => props.width || "160px"};
    height: ${(props) => props.height || "45px"};
    font-weight: 600;
    border: none;
    background-color: #f4a734;
    color: #202329;
`;
