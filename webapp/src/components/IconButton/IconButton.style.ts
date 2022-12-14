import styled from "styled-components";

export const StyledIconButton = styled.button`
    background-color: transparent;
    border: none;
    outline: transparent;
    cursor: pointer;
    margin: 0;
    padding: 0;

    & svg {
        opacity: 1;
        transition: 200ms ease;
        transition-property: opacity;
    }

    & svg:hover {
        opacity: 0.6;
    }
`;
