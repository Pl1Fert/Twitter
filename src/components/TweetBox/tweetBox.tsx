import { FC, SyntheticEvent, useState } from "react";

import uploadIcon from "@/assets/icons/upload-image.svg";
import person from "@/assets/images/profile-photo.jpg";
import { Button } from "@/components/UI";
import { ButtonType, NotificationMessages, NotificationTypes } from "@/constants";
import { isEmptyString, isFirebaseError } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { TweetService } from "@/services";
import { userSelector } from "@/store/selectors";
import { notificationActions } from "@/store/slices/notificationSlice";

import {
    Avatar,
    Column,
    Container,
    FileInput,
    Label,
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

    const sendTweet = async (): Promise<void> => {
        try {
            await TweetService.sendTweet(value, name, email, uploadedImage);

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
            <Avatar src={person} alt="person" />
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
