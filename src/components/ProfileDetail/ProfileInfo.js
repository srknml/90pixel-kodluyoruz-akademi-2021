import React from "react";
import Button from "../Button/Button";
import {
    ProfileImgBox,
    ProfileImg,
    ProfileContent,
    ContentItem,
} from "./styles";
import {
    EmailIcon,
    LocationPin,
    CompanyIcon,
    BlogIcon,
    TwitterIcon,
} from "../Icon";
function ProfileInfo({ user }) {
    return (
        <ProfileContent>
            <ProfileImgBox>
                <ProfileImg src={user.avatar_url} />
            </ProfileImgBox>
            <ContentItem>{user.name}</ContentItem>
            <ContentItem>{user.login}</ContentItem>
            <Button text="Follow" />
            <ContentItem> {user.bio} </ContentItem>
            <ContentItem>
                Followers: {user.followers} Following: {user.following}{" "}
            </ContentItem>

            {user.company && (
                <ContentItem>
                    <CompanyIcon />
                    <span>{user.company} </span>
                </ContentItem>
            )}

            {user.blog && (
                <ContentItem>
                    <BlogIcon />
                    <span>{user.blog}</span>
                </ContentItem>
            )}

            {user.location && (
                <ContentItem>
                    <LocationPin />
                    <span>{user.location}</span>
                </ContentItem>
            )}

            {user.email && (
                <ContentItem>
                    <EmailIcon />
                    <span> {user.email} </span>
                </ContentItem>
            )}
            {user.twitter_username && (
                <ContentItem>
                    <TwitterIcon />
                    <span>@{user.twitter_username} </span>
                </ContentItem>
            )}
        </ProfileContent>
    );
}

export default ProfileInfo;
