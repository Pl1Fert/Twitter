import { memo } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { getAuth, updateEmail, updatePassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

import closeIcon from "@/assets/icons/cross.svg";
import { Button, Input } from "@/components/UI";
import {
    ButtonType,
    DbCollections,
    InputType,
    NotificationMessages,
    NotificationTypes,
} from "@/constants";
import { db } from "@/firebase";
import { isFirebaseError } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IProfileFields } from "@/interfaces";
import { userSelector } from "@/store/selectors";
import { notificationActions } from "@/store/slices/notificationSlice";
import { userActions } from "@/store/slices/userSlice";
import { ProfileEditScheme } from "@/validators/profileEditScheme";

import { ProfileEditModalProps } from "./profileEditModal.interfaces";
import { Center, ErorrsWrapper, Image, Label, Modal, Row } from "./profileEditModal.styled";

export const ProfileEditModal = memo<ProfileEditModalProps>(({ closeModal }) => {
    const { name, phone, email, birthDate, description, idInDb } = useAppSelector(userSelector);
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty, isSubmitting },
    } = useForm<IProfileFields>({ mode: "onBlur", resolver: yupResolver(ProfileEditScheme) });
    const dispatch = useAppDispatch();

    const submitHandler = async (data: IProfileFields): Promise<void> => {
        if (
            name === data.name &&
            email === data.email &&
            phone === data.phone &&
            birthDate === data.birthDate &&
            description === data.description &&
            !data.newPassword
        ) {
            closeModal();

            return;
        }

        try {
            const auth = getAuth();
            const user = auth.currentUser;

            if (!user || !idInDb) {
                throw new Error(NotificationMessages.notSignedIn);
            }

            const userRef = doc(db, DbCollections.users, idInDb);

            if (email !== data.email) {
                await updateEmail(auth.currentUser, data.email);
            } else if (data.newPassword) {
                await updatePassword(auth.currentUser, data.newPassword);
            }

            await updateDoc(userRef, {
                name: data.name,
                email: data.email,
                phone: data.phone,
                birthDate: data.birthDate,
                description: data.description,
            });

            dispatch(userActions.setBirthdate(data.birthDate));
            dispatch(userActions.setName(data.name));
            dispatch(userActions.setPhone(data.phone));
            dispatch(userActions.setDescription(data.description || null));

            dispatch(
                notificationActions.addNotification({
                    type: NotificationTypes.success,
                    message: NotificationMessages.profileUpdated,
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
            }
        }
    };

    return createPortal(
        <Modal id="profileEditModal">
            <Form onSubmit={handleSubmit(submitHandler)}>
                <Row>
                    <Label>
                        Name:{" "}
                        <Input placeholder="Name" {...register("name")} defaultValue={name ?? ""} />
                    </Label>
                    <Label>
                        Email:{" "}
                        <Input
                            placeholder="Email"
                            {...register("email")}
                            defaultValue={email ?? ""}
                        />
                    </Label>
                    <Label>
                        Phone:{" "}
                        <Input
                            placeholder="Phone"
                            {...register("phone")}
                            defaultValue={phone ?? ""}
                        />
                    </Label>
                </Row>
                <ErorrsWrapper>
                    {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
                    {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                </ErorrsWrapper>
                <Row>
                    <Label>
                        BirthDate:{" "}
                        <Input
                            placeholder="dd/monthName/yyyy"
                            {...register("birthDate")}
                            defaultValue={birthDate ?? ""}
                        />
                    </Label>
                </Row>
                <ErorrsWrapper>
                    {errors?.birthDate && <p>{errors?.birthDate?.message || "Error!"}</p>}
                </ErorrsWrapper>
                <Row>
                    <Label>
                        New Password:{" "}
                        <Input
                            placeholder="Password"
                            type={InputType.password}
                            autoComplete="new-password"
                            {...register("newPassword")}
                        />
                    </Label>
                    <Label>
                        Confirm Password:{" "}
                        <Input
                            placeholder="Password"
                            type={InputType.password}
                            autoComplete="new-password"
                            {...register("confirmPassword")}
                        />
                    </Label>
                </Row>
                <ErorrsWrapper>
                    {errors?.newPassword && <p>{errors?.newPassword?.message || "Error!"}</p>}
                    {errors?.confirmPassword && (
                        <p>{errors?.confirmPassword?.message || "Error!"}</p>
                    )}
                </ErorrsWrapper>
                <Center>
                    <Label>
                        Description:
                        <Input
                            placeholder="Description"
                            {...register("description")}
                            defaultValue={description ?? ""}
                        />
                    </Label>
                </Center>
                <Center>
                    <Button
                        type={ButtonType.submit}
                        primary
                        content="Save"
                        width="30%"
                        disabled={!isDirty || !isValid || isSubmitting}
                    />
                </Center>
            </Form>
            <Image src={closeIcon} alt="closeIcon" onClick={closeModal} />
        </Modal>,
        document.body
    );
});
