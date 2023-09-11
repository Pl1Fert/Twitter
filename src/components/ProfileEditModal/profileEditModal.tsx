import { FC } from "react";
import { createPortal } from "react-dom";

import closeIcon from "@/assets/icons/cross.svg";
import { Button } from "@/components/UI";
import { ButtonType } from "@/constants";

import { ProfileEditModalProps } from "./profileEditModal.interfaces";
import { Image, Modal } from "./profileEditModal.styled";

export const ProfileEditModal: FC<ProfileEditModalProps> = ({ closeModal }) =>
    createPortal(
        <Modal id="profileEditModal">
            <Button type={ButtonType.button} primary content="Save" width="50%" />
            <Image src={closeIcon} alt="closeIcon" onClick={closeModal} />
        </Modal>,
        document.body
    );
