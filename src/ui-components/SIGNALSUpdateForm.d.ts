/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SIGNALS } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SIGNALSUpdateFormInputValues = {
    datetime?: string;
    name?: string;
    description?: string;
    assignee?: string;
    group?: string;
    workflow?: string;
    related_data?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type SIGNALSUpdateFormValidationValues = {
    datetime?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    assignee?: ValidationFunction<string>;
    group?: ValidationFunction<string>;
    workflow?: ValidationFunction<string>;
    related_data?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SIGNALSUpdateFormOverridesProps = {
    SIGNALSUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    datetime?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    assignee?: PrimitiveOverrideProps<TextFieldProps>;
    group?: PrimitiveOverrideProps<TextFieldProps>;
    workflow?: PrimitiveOverrideProps<TextFieldProps>;
    related_data?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SIGNALSUpdateFormProps = React.PropsWithChildren<{
    overrides?: SIGNALSUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sIGNALS?: SIGNALS;
    onSubmit?: (fields: SIGNALSUpdateFormInputValues) => SIGNALSUpdateFormInputValues;
    onSuccess?: (fields: SIGNALSUpdateFormInputValues) => void;
    onError?: (fields: SIGNALSUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SIGNALSUpdateFormInputValues) => SIGNALSUpdateFormInputValues;
    onValidate?: SIGNALSUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SIGNALSUpdateForm(props: SIGNALSUpdateFormProps): React.ReactElement;
