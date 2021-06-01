import styled from "styled-components";
export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f4a734;
`;

export const HeroText = styled.h1`
    flex-wrap: wrap;
    width: 80%;
    text-align: center;
    position: absolute;
    align-self: center;
    line-height: 1.5;
    letter-spacing: 4px;
    border: none;
    font-weight: 900;
    color: #d4cfcf;
    word-wrap: break-word;
    font-size: 4.625rem;
    @media (max-width: 55.625em) {
        font-size: 2.75rem;
    }
    @media (max-width: 40.625em) {
        font-size: 1.45rem;
    }
    cursor: default;
`;
export const HeroImageBox = styled.div`
    display: flex;
    padding-bottom: 1px;
`;
export const HeroImage = styled.img`
    margin: auto;
    width: 100%;
    height: 100%;
`;
export const Letter = styled.span`
    cursor: default;
    color: #d4cfcf;
    // min-width:10px;
    position: relative;
    bottom: 0;
    transition: all ease-out 0.2s;
    &:hover {
        position: relative;
        bottom: 10px;
        text-shadow: 0 1px 0 #f5d29f, 0 2px 0 #f5d29f, 0 3px 0 #f5d29f,
            0 4px 0 #f5d29f, 0 20px 30px rgba(0, 0, 0, 0.75);
        color: rgb(231, 137, 49);
    }
`;
