import { memo, SyntheticEvent, useState } from "react";
import { createPortal } from "react-dom";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

import closeIcon from "@/assets/icons/cross.svg";
import uploadIcon from "@/assets/icons/upload-image.svg";
import { Button } from "@/components/UI";
import { ButtonType, DbCollections, NotificationMessages, NotificationTypes } from "@/constants";
import { db, storage } from "@/firebase";
import { isEmptyString, isFirebaseError } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { userSelector } from "@/store/selectors";
import { notificationActions } from "@/store/slices/notificationSlice";

import { TweetModalProps } from "./tweetModal.interfaces";
import { Column, FileInput, Image, Label, Modal, TextArea, UploadIcon } from "./tweetModal.styled";

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

            closeModal();
        } catch (error) {
            if (isFirebaseError(error)) {
                dispatch(
                    notificationActions.addNotification({
                        type: NotificationTypes.error,
                        message: error.message,
                    })
                );
                closeModal();
            }
        }
    };

    return createPortal(
        <Modal id="tweetModal">
            <Column>
                <TextArea placeholder="What's happening" value={value} onChange={onChangeHandler} />
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
        </Modal>,
        document.body
    );
});
