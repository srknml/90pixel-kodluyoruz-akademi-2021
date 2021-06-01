import styled from "styled-components";

export const ProfileCardContainer = styled.div`
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    overflow: hidden;
    border-radius: 0.5rem;
    margin: 0.75rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
    transition: 0.2s ease-in-out 0s;
    &:hover {
        box-shadow: 2px 4px 8px 1px #000000;
        transform: scale(1.05);
    }
`;
export const ImageBox = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;
export const ProfileImg = styled.img`
    max-width: 100%;
    object-fit: cover;
`;
export const Content = styled.div`
    display: flex;
    position: absolute;
    min-width: 250px;
    max-width: 250px;
    color: rgb(255, 255, 255);
    flex-direction: column;
    border-radius: 0.5rem;
`;
export const ContentSection = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    bottom: -74px;
    text-transform: capitalize;
    flex-direction: column;
    letter-spacing: 0.5px;
    font-size: 18px;
    font-weight: 500;
    background-color: rgba(59, 53, 53, 0.637);
    visibility: hidden;
    transition: visibility 0.1s step-end, bottom 0.1s ease-out;
    ${ProfileCardContainer}:hover & {
        visibility: visible;
        bottom: 0;
    }
    &:not(:last-child) {
        border-bottom: 2px solid #f4a734;
    }
    & a:hover {
        color: #fcb955;
    }
    & :last-child {
        border-radius: 0.5rem;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
`;
export const SectionItem = styled.span`
    padding: 6px 0;
    visibility: ${(props) => props.visible || "hidden"};
    &:first-child {
        background-color: rgba(29, 25, 25, 0.692);
        width: 100%;
    }
    ${ProfileCardContainer}:hover & {
        border-radius: 0;
        visibility: visible;
    }
`;
