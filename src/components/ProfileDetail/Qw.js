import React from "react";
import { Container, RepoContainer } from "./styles";
import ProfileInfo from "./ProfileInfo";
function Qw({ user }) {
    /**
     * Container                        Container
     *      ImageBox                        Repositories
     *      Names -  Login Name
     *       Bio                             Repo Item
     *      Follow Button
     *      follower bilgileri
     *  Location Email,Blog
     */
    return (
        <Container>
            <ProfileInfo user={user} />
            <RepoContainer>asdasdasd</RepoContainer>
        </Container>
    );
}

export default Qw;
