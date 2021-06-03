import React from "react";
// import "./styles/ProfileCard.css";
import { Link } from "react-router-dom";
import {
    ProfileCardContainer,
    ImageBox,
    ProfileImg,
    Content,
    ContentSection,
    SectionItem,
} from "./styles";
const ProfileCard = (profile) => {
    console.log(profile)
    return (
        <ProfileCardContainer>
            <ImageBox>
                <ProfileImg src={profile.avatar_url} />
            </ImageBox>
            <Content>
                <ContentSection>
                    <SectionItem visible="visible">
                        <Link to={`/profile/${profile.id}`}>
                            {profile.name ? profile.name : profile.login}{" "}
                        </Link>
                    </SectionItem>
                    <SectionItem>
                        {profile.location ? profile.location : "belirtilmemiş"}
                    </SectionItem>
                </ContentSection>
                <ContentSection>
                    <SectionItem>
                        <Link to={{ pathname: profile.html_url }}>GitHub</Link>
                    </SectionItem>
                </ContentSection>
            </Content>
        </ProfileCardContainer>
    );
};
export default ProfileCard;
