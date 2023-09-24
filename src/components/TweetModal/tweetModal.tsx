import { memo, SyntheticEvent, useState } from "react";
import { createPortal } from "react-dom";

import closeIcon from "@/assets/icons/cross.svg";
import uploadIcon from "@/assets/icons/upload-image.svg";
import { ButtonType, NotificationMessages, NotificationTypes } from "@/constants";
import { isEmptyString, isFirebaseError } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { TweetService } from "@/services";
import { userSelector } from "@/store/selectors";
import { notificationActions } from "@/store/slices/notificationSlice";
import { Button } from "@/UI";

import { TweetModalProps } from "./tweetModal.interfaces";
import {
    Column,
    Container,
    FileInput,
    Image,
    Label,
    Modal,
    TextArea,
    UploadIcon,
} from "./tweetModal.styled";

export const TweetModal = memo<TweetModalProps>(({ closeModal }) => {
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
        } catch (error) {
            if (isFirebaseError(error)) {
                dispatch(
                    notificationActions.addNotification({
                        type: NotificationTypes.error,
                        message: error.message,
                    })
                );
            }
        } finally {
            closeModal();
        }
    };

    const closeOutside = (e: SyntheticEvent): void => {
        if (e.currentTarget === e.target) {
            closeModal();
        }
    };

    return createPortal(
        <Container id="tweetModal" onClick={closeOutside}>
            <Modal>
                <Column>
                    <TextArea
                        placeholder="What's happening"
                        value={value}
                        onChange={onChangeHandler}
                    />
                    <Label htmlFor="upload-photo-modal">
                        <UploadIcon src={uploadIcon} alt="upload" />
                        <FileInput
                            type="file"
                            id="upload-photo-modal"
                            onChange={inputFileChangeHandler}
                        />
                    </Label>
                </Column>
                <Button
                    type={ButtonType.button}
                    primary
                    content="Tweet"
                    width="50%"
                    disabled={isEmptyString(value)}
                    onClick={sendTweet}
                />
                <Image src={closeIcon} alt="closeIcon" onClick={closeModal} />
            </Modal>
        </Container>,
        document.body
    );
});
