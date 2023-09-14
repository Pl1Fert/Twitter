import { FC, SyntheticEvent, useState } from "react";

import background from "@/assets/images/home-background.jpg";
import person from "@/assets/images/profile-photo.jpg";
import { ProfileEditModal } from "@/components";
import { Button } from "@/components/UI";
import { ButtonType } from "@/constants";
import { isEmptyString } from "@/helpers";
import { useAppSelector } from "@/hooks";
import { userSelector } from "@/store/selectors";

import {
    BackgroundImage,
    Content,
    Description,
    Email,
    Main,
    Name,
    ProfileImage,
    Row,
    SmallProfileImage,
    TextArea,
    Title,
    Top,
    Tweets,
    WithTextArea,
} from "./profilePage.styled";

const ProfilePage: FC = () => {
    const { name, email, description } = useAppSelector(userSelector);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const toggleModal = () => {
        setIsOpenModal((prev) => !prev);
    };

    const [value, setValue] = useState<string>("");

    const onChangeHandler = (e: SyntheticEvent): void => {
        const target = e.target as HTMLTextAreaElement;

        setValue(target.value);
    };

    return (
        <>
            <Main>
                <Top>
                    <Title>{name}</Title>
                    <Tweets>1070 Tweets</Tweets>
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
                <WithTextArea>
                    <SmallProfileImage src={person} alt="person" />
                    <TextArea
                        placeholder="What's happening"
                        value={value}
                        onChange={onChangeHandler}
                    />
                    <Button
                        type={ButtonType.button}
                        primary
                        content="Tweet"
                        width="25%"
                        onClick={toggleModal}
                        disabled={isEmptyString(value)}
                    />
                </WithTextArea>
            </Main>
            {isOpenModal && <ProfileEditModal closeModal={toggleModal} />}
        </>
    );
};

export default ProfilePage;
