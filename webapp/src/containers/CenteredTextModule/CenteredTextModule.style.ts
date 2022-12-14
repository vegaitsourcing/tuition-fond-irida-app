import styled from "styled-components";

interface Props {
    imageUrl?: string;
}
export const StyledCenteredTextModule = styled.div<Props>`
    padding: 60px 0 90px;
    text-align: center;
    color: ${(props) => props.theme.colors.white.main};
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
    background-image: ${(props) => (props.imageUrl ? `url(${props.imageUrl})` : "none")};
    background-size: cover;

    &.primary {
        background-color: ${(props) => props.theme.colors.primary.main};
    }
    &.secondary {
        background-color: ${(props) => props.theme.colors.white.main};
        color: ${(props) => props.theme.colors.primary.main};
    }
    &.accent {
        background-color: ${(props) => props.theme.colors.accent.main};
    }

    & h1 {
        font-size: 68px;
    }

    & h2 {
        font-size: 48px;
        line-height: 110%;
        font-weight: 600;
        margin-bottom: 30px;
        max-width: 90%;
        z-index: 2;
    }

    & p {
        margin-bottom: 60px;
        max-width: 90%;
        z-index: 2;
    }

    & div {
        z-index: 2;
    }

    @media ${(props) => props.theme.breakpoints.laptop} {
        & h2 {
            font-size: 40px;
            line-height: 44px;
        }
    }
`;
