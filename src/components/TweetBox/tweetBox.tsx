import { FC, SyntheticEvent, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

import uploadIcon from "@/assets/icons/upload-image.svg";
import person from "@/assets/images/profile-photo.jpg";
import { Button } from "@/components/UI";
import { ButtonType, DbCollections, NotificationMessages, NotificationTypes } from "@/constants";
import { db, storage } from "@/firebase";
import { isEmptyString, isFirebaseError } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { userSelector } from "@/store/selectors";
import { notificationActions } from "@/store/slices/notificationSlice";

import {
    Column,
    Container,
    FileInput,
    Label,
    SmallProfileImage,
    TextArea,
    UploadIcon,
} from "./tweetBox.styled";

export const TweetBox: FC = () => {
    const [value, setValue] = useState<string>("");
    const [uploadedImage, setUploadedImage] = useState<File | null>(null);
    const { name, email } = useAppSelector(userSelector);
    const dispatch = useAppDispatch();

    const onChangeHandler = (e: SyntheticEvent): void => {
        const target = e.target as HTMLTextAreaElement;

        setValue(target.value);
    };

    const inputFileChangeHandler = (e: SyntheticEvent): void => {
        const target = e.target as HTMLInputElement;
        if (target.files) {
            setUploadedImage(target.files[0]);
        }
    };

    const uploadImage = async (): Promise<string | null> => {
        if (!uploadedImage) {
            return null;
        }

        const imageName = `images/${uploadedImage.name + Date.now()}`;

        const imageRef = ref(storage, imageName);
        await uploadBytes(imageRef, uploadedImage);

        return imageName;
    };

    const sendTweet = async () => {
        try {
            const tweetsCollectionRef = collection(db, DbCollections.tweets);
            const imageName = await uploadImage();

            await addDoc(tweetsCollectionRef, {
                name,
                email,
                text: value,
                likes: 0,
                createdAt: new Date(),
                image: imageName,
            });

            dispatch(
                notificationActions.addNotification({
                    type: NotificationTypes.success,
                    message: NotificationMessages.tweetPublished,
                })
            );

            setValue("");
        } catch (error) {
            if (isFirebaseError(error)) {
                dispatch(
                    notificationActions.addNotification({
                        type: NotificationTypes.error,
                        message: error.message,
                    })
                );
                setValue("");
            }
        }
    };

    return (
        <Container>
            <SmallProfileImage src={person} alt="person" />
            <Column>
                <TextArea placeholder="What's happening" value={value} onChange={onChangeHandler} />
                <Label htmlFor="upload-photo">
                    <UploadIcon src={uploadIcon} alt="upload" />
                    <FileInput type="file" id="upload-photo" onChange={inputFileChangeHandler} />
                </Label>
            </Column>
            <Button
                type={ButtonType.button}
                primary
                content="Tweet"
                width="25%"
                disabled={isEmptyString(value)}
                onClick={sendTweet}
            />
        </Container>
    );
};
