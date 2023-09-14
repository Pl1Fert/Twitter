import { FC } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import closeIcon from "@/assets/icons/cross.svg";
import { Button, Input } from "@/components/UI";
import { ButtonType, InputType } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IProfileFields } from "@/interfaces";
import { userSelector } from "@/store/selectors";
import { userActions } from "@/store/slices/userSlice";
import { ProfileEditScheme } from "@/validators/profileEditScheme";

import { ProfileEditModalProps } from "./profileEditModal.interfaces";
import { Center, ErorrsWrapper, Image, Modal, Row, TextArea } from "./profileEditModal.styled";

export const ProfileEditModal: FC<ProfileEditModalProps> = ({ closeModal }) => {
    const { name, phone, email, birthDate } = useAppSelector(userSelector);
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty, isSubmitting },
    } = useForm<IProfileFields>({ mode: "onBlur", resolver: yupResolver(ProfileEditScheme) });
    const dispatch = useAppDispatch();

    const submitHandler = (data: IProfileFields) => {
        if (
            name === data.name &&
            email === data.email &&
            phone === data.phone &&
            birthDate === data.birthDate &&
            !data.newPassword
        ) {
            closeModal();

            return;
        }

        dispatch(userActions.setBirthdate(data.birthDate));
        dispatch(userActions.setName(data.name));
        dispatch(userActions.setPhone(data.phone));
        dispatch(userActions.setDescription(data.description || null));

        closeModal();
    };

    return createPortal(
        <Modal id="profileEditModal">
            <Form onSubmit={handleSubmit(submitHandler)}>
                <Row>
                    <label>
                        Name:{" "}
                        <Input placeholder="Name" {...register("name")} defaultValue={name ?? ""} />
                    </label>
                    <label>
                        Email:{" "}
                        <Input
                            placeholder="Email"
                            {...register("email")}
                            defaultValue={email ?? ""}
                        />
                    </label>
                    <label>
                        Phone:{" "}
                        <Input
                            placeholder="Phone"
                            {...register("phone")}
                            defaultValue={phone ?? ""}
                        />
                    </label>
                </Row>
                <ErorrsWrapper>
                    {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
                    {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                </ErorrsWrapper>
                <Row>
                    <label>
                        BirthDate:{" "}
                        <Input
                            placeholder="dd/monthName/yyyy"
                            {...register("birthDate")}
                            defaultValue={birthDate ?? ""}
                        />
                    </label>
                </Row>
                <ErorrsWrapper>
                    {errors?.birthDate && <p>{errors?.birthDate?.message || "Error!"}</p>}
                </ErorrsWrapper>
                <Row>
                    <label>
                        New Password:{" "}
                        <Input
                            placeholder="Password"
                            type={InputType.password}
                            {...register("newPassword")}
                        />
                    </label>
                    <label>
                        Confirm Password:{" "}
                        <Input
                            placeholder="Password"
                            type={InputType.password}
                            {...register("confirmPassword")}
                        />
                    </label>
                </Row>
                <ErorrsWrapper>
                    {errors?.newPassword && <p>{errors?.newPassword?.message || "Error!"}</p>}
                    {errors?.confirmPassword && (
                        <p>{errors?.confirmPassword?.message || "Error!"}</p>
                    )}
                </ErorrsWrapper>
                <Center>
                    <TextArea placeholder="Description" {...register("description")} />
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
};
