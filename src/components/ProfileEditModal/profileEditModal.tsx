import { memo, SyntheticEvent } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import closeIcon from "@/assets/icons/cross.svg";
import { ButtonType, InputType, NotificationMessages, NotificationTypes } from "@/constants";
import { isFirebaseError, isSomethingChanged } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IProfileEditFields } from "@/interfaces";
import { UserService } from "@/services";
import { userSelector } from "@/store/selectors";
import { notificationActions } from "@/store/slices/notificationSlice";
import { userActions } from "@/store/slices/userSlice";
import { Button, Input } from "@/UI";
import { ProfileEditScheme } from "@/validators/profileEditScheme";

import { ProfileEditModalProps } from "./profileEditModal.interfaces";
import { Center, Container, Image, Label, Modal, Row } from "./profileEditModal.styled";

export const ProfileEditModal = memo<ProfileEditModalProps>(({ closeModal }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty, isSubmitting },
    } = useForm<IProfileEditFields>({ mode: "onBlur", resolver: yupResolver(ProfileEditScheme) });

    const user = useAppSelector(userSelector);
    const { name, phone, email, birthDate, description, id } = user;
    const dispatch = useAppDispatch();

    const submitHandler = async (data: IProfileEditFields): Promise<void> => {
        if (isSomethingChanged(data, user)) {
            closeModal();
            return;
        }

        try {
            await UserService.updateUserInfo(data, id, email);

            dispatch(
                userActions.setUser({
                    ...user,
                    name: data.name,
                    birthDate: data.birthDate,
                    phone: data.phone,
                    description: data.description || null,
                })
            );

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

    const closeOutside = (e: SyntheticEvent): void => {
        if (e.currentTarget === e.target) {
            closeModal();
        }
    };

    return createPortal(
        <Container id="profileEditModal" onClick={closeOutside}>
            <Modal>
                <Form onSubmit={handleSubmit(submitHandler)}>
                    <Row>
                        <Label>
                            Name:{" "}
                            <Input
                                placeholder="Name"
                                {...register("name")}
                                defaultValue={name ?? ""}
                                errorMessage={errors?.name?.message}
                            />
                        </Label>
                        <Label>
                            Email:{" "}
                            <Input
                                placeholder="Email"
                                {...register("email")}
                                defaultValue={email ?? ""}
                                errorMessage={errors?.email?.message}
                            />
                        </Label>
                        <Label>
                            Phone:{" "}
                            <Input
                                placeholder="Phone"
                                {...register("phone")}
                                defaultValue={phone ?? ""}
                                errorMessage={errors?.phone?.message}
                            />
                        </Label>
                    </Row>
                    <Row>
                        <Label>
                            BirthDate:{" "}
                            <Input
                                placeholder="dd/Month/yyyy"
                                {...register("birthDate")}
                                defaultValue={birthDate ?? ""}
                                errorMessage={errors?.birthDate?.message}
                            />
                        </Label>
                    </Row>
                    <Row>
                        <Label>
                            New Password:{" "}
                            <Input
                                placeholder="Password"
                                type={InputType.password}
                                autoComplete="new-password"
                                {...register("newPassword")}
                                errorMessage={errors?.newPassword?.message}
                            />
                        </Label>
                        <Label>
                            Confirm Password:{" "}
                            <Input
                                placeholder="Password"
                                type={InputType.password}
                                autoComplete="new-password"
                                {...register("confirmPassword")}
                                errorMessage={errors?.confirmPassword?.message}
                            />
                        </Label>
                    </Row>
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
            </Modal>
        </Container>,
        document.body
    );
});
