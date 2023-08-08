/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SIGNALSCreateFormInputValues = {
    datetime?: string;
    name?: string;
    description?: string;
    assignee?: string;
    group?: string;
    workflow?: boolean;
    chart_data?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type SIGNALSCreateFormValidationValues = {
    datetime?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    assignee?: ValidationFunction<string>;
    group?: ValidationFunction<string>;
    workflow?: ValidationFunction<boolean>;
    chart_data?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SIGNALSCreateFormOverridesProps = {
    SIGNALSCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    datetime?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    assignee?: PrimitiveOverrideProps<TextFieldProps>;
    group?: PrimitiveOverrideProps<TextFieldProps>;
    workflow?: PrimitiveOverrideProps<SwitchFieldProps>;
    chart_data?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SIGNALSCreateFormProps = React.PropsWithChildren<{
    overrides?: SIGNALSCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SIGNALSCreateFormInputValues) => SIGNALSCreateFormInputValues;
    onSuccess?: (fields: SIGNALSCreateFormInputValues) => void;
    onError?: (fields: SIGNALSCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SIGNALSCreateFormInputValues) => SIGNALSCreateFormInputValues;
    onValidate?: SIGNALSCreateFormValidationValues;
} & React.CSSProperties>;
export default function SIGNALSCreateForm(props: SIGNALSCreateFormProps): React.ReactElement;
