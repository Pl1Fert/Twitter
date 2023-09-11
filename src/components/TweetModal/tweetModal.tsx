import { FC } from "react";
import { createPortal } from "react-dom";

import closeIcon from "@/assets/icons/cross.svg";
import { Button } from "@/components/UI";
import { ButtonType } from "@/constants";

import { TweetModalProps } from "./tweetModal.interfaces";
import { Image, Modal, Textarea } from "./tweetModal.styled";

export const TweetModal: FC<TweetModalProps> = ({ closeModal }) =>
    createPortal(
        <Modal id="tweetModal">
            <Textarea placeholder="New Tweet" />
            <Button type={ButtonType.button} primary content="Tweet" width="50%" />
            <Image src={closeIcon} alt="closeIcon" onClick={closeModal} />
        </Modal>,
        document.body
    );
