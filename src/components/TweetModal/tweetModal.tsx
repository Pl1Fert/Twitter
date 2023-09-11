import { FC, SyntheticEvent, useState } from "react";
import { createPortal } from "react-dom";

import closeIcon from "@/assets/icons/cross.svg";
import { Button } from "@/components/UI";
import { ButtonType } from "@/constants";
import { isEmptyString } from "@/helpers";

import { TweetModalProps } from "./tweetModal.interfaces";
import { Image, Modal, Textarea } from "./tweetModal.styled";

export const TweetModal: FC<TweetModalProps> = ({ closeModal }) => {
    const [value, setValue] = useState<string>("");

    const onChangeHandler = (e: SyntheticEvent): void => {
        const target = e.target as HTMLTextAreaElement;

        setValue(target.value);
    };

    return createPortal(
        <Modal id="tweetModal">
            <Textarea placeholder="New Tweet" value={value} onChange={onChangeHandler} />
            <Button
                type={ButtonType.button}
                primary
                content="Tweet"
                width="50%"
                disabled={isEmptyString(value)}
            />
            <Image src={closeIcon} alt="closeIcon" onClick={closeModal} />
        </Modal>,
        document.body
    );
};
