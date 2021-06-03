import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: row;
    color: white;
    margin: 0 auto;
    width: 60%;
`;
export const ProfileContent = styled.div`
    display: flex;
    flex-flow: column;
    text-align: left;
    width: 280px;
    background-color: black;
    padding: 8px;
`;

export const ProfileImgBox = styled.div``;
export const ProfileImg = styled.img`
    width: 100%;
    border-radius: 50%;
`;

export const ContentItem = styled.div`
    // border-bottom: 1px solid orange;
    padding: 6px 0;
    & span {
        vertical-align: 4px;
    }
    & img {
        padding-right: 8px;
    }
`;
export const RepoContainer = styled.div``;
