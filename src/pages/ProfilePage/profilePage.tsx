import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import backArrow from "@/assets/icons/left.svg";
import background from "@/assets/images/home-background.jpg";
import person from "@/assets/images/profile-photo.jpg";
import { Feed, ProfileEditModal, TweetBox } from "@/components";
import { Button } from "@/components/UI";
import { ButtonType, DbCollections } from "@/constants";
import { db } from "@/firebase";
import { useAppSelector } from "@/hooks";
import { userSelector } from "@/store/selectors";

import {
    Avatar,
    BackgroundImage,
    BackIcon,
    Content,
    Description,
    Email,
    Name,
    Row,
    TabName,
    Title,
    Top,
    Tweets,
} from "./profilePage.styled";

interface State {
    name: string;
    email: string;
    description: string;
}

const ProfilePage: FC = () => {
    const [tweetsCount, setTweetsCount] = useState<number>(0);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [user, setUser] = useState<State>({ name: "", email: "", description: "" });

    const { id: myId } = useAppSelector(userSelector);
    const { id } = useParams();
    const navigate = useNavigate();

    const modalClickHandler = (): void => {
        setIsOpenModal((prev) => !prev);
    };

    const backClickHandler = (): void => {
        navigate(-1);
    };

    useEffect(() => {
        if (id) {
            const docRef = doc(db, DbCollections.users, id);
            getDoc(docRef)
                .then((response) => {
                    if (response.exists()) {
                        setUser({
                            name: response.data().name as string,
                            email: response.data().email as string,
                            description: response.data().description as string,
                        });
                    }
                })
                .catch(() => {});
        }
    }, []);

    return (
        <>
            <Top>
                {id !== myId && <BackIcon src={backArrow} onClick={backClickHandler} />}
                <div>
                    <Title>{user.name}</Title>
                    <Tweets>{tweetsCount} Tweets</Tweets>
                </div>
            </Top>
            <BackgroundImage src={background} alt="background" />
            <Row>
                <Content>
                    <Avatar src={person} alt="person" />
                    <Name>{user.name}</Name>
                    <Email>{user.email}</Email>
                    <Description>{user.description}</Description>
                </Content>
                {id === myId && (
                    <Button
                        type={ButtonType.button}
                        outline
                        content="Edit Profile"
                        width="25%"
                        onClick={modalClickHandler}
                    />
                )}
            </Row>
            <TweetBox />
            <TabName>Tweets</TabName>
            <Feed fromUser={user.email} setTweetsCount={setTweetsCount} />
            {isOpenModal && <ProfileEditModal closeModal={modalClickHandler} />}
        </>
    );
};

export default ProfilePage;
