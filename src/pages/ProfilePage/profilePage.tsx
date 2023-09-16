import { FC, useState } from "react";

import background from "@/assets/images/home-background.jpg";
import person from "@/assets/images/profile-photo.jpg";
import { Feed, ProfileEditModal, TweetBox } from "@/components";
import { Button } from "@/components/UI";
import { ButtonType } from "@/constants";
import { useAppSelector } from "@/hooks";
import { userSelector } from "@/store/selectors";

import {
    BackgroundImage,
    Content,
    Description,
    Email,
    Name,
    ProfileImage,
    Row,
    Title,
    Top,
    Tweets,
} from "./profilePage.styled";

const ProfilePage: FC = () => {
    const { name, email, description } = useAppSelector(userSelector);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [tweetsCount, setTweetsCount] = useState<number>(0);

    const toggleModal = () => {
        setIsOpenModal((prev) => !prev);
    };

    return (
        <>
            <Top>
                <Title>{name}</Title>
                <Tweets>{tweetsCount} Tweets</Tweets>
            </Top>
            <BackgroundImage src={background} alt="background" />
            <Row>
                <Content>
                    <ProfileImage src={person} alt="person" />
                    <Name>{name}</Name>
                    <Email>{email}</Email>
                    <Description>{description}</Description>
                </Content>
                <Button
                    type={ButtonType.button}
                    outline
                    content="Edit Profile"
                    width="20%"
                    onClick={toggleModal}
                />
            </Row>
            <TweetBox />
            <Feed fromUser setTweetsCount={setTweetsCount} />

            {isOpenModal && <ProfileEditModal closeModal={toggleModal} />}
        </>
    );
};

export default ProfilePage;
