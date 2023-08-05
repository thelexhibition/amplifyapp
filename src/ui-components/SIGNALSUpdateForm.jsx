/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { SIGNALS } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SIGNALSUpdateForm(props) {
  const {
    id: idProp,
    sIGNALS: sIGNALSModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    datetime: "",
    name: "",
    description: "",
    assignee: "",
    group: "",
    workflow: "",
    related_data: "",
    createdAt: "",
    updatedAt: "",
  };
  const [datetime, setDatetime] = React.useState(initialValues.datetime);
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [assignee, setAssignee] = React.useState(initialValues.assignee);
  const [group, setGroup] = React.useState(initialValues.group);
  const [workflow, setWorkflow] = React.useState(initialValues.workflow);
  const [related_data, setRelated_data] = React.useState(
    initialValues.related_data
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = sIGNALSRecord
      ? { ...initialValues, ...sIGNALSRecord }
      : initialValues;
    setDatetime(cleanValues.datetime);
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setAssignee(cleanValues.assignee);
    setGroup(cleanValues.group);
    setWorkflow(cleanValues.workflow);
    setRelated_data(cleanValues.related_data);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [sIGNALSRecord, setSIGNALSRecord] = React.useState(sIGNALSModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(SIGNALS, idProp)
        : sIGNALSModelProp;
      setSIGNALSRecord(record);
    };
    queryData();
  }, [idProp, sIGNALSModelProp]);
  React.useEffect(resetStateValues, [sIGNALSRecord]);
  const validations = {
    datetime: [],
    name: [],
    description: [],
    assignee: [],
    group: [],
    workflow: [],
    related_data: [],
    createdAt: [],
    updatedAt: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          datetime,
          name,
          description,
          assignee,
          group,
          workflow,
          related_data,
          createdAt,
          updatedAt,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            SIGNALS.copyOf(sIGNALSRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SIGNALSUpdateForm")}
      {...rest}
    >
      <TextField
        label="Datetime"
        isRequired={false}
        isReadOnly={false}
        value={datetime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              datetime: value,
              name,
              description,
              assignee,
              group,
              workflow,
              related_data,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.datetime ?? value;
          }
          if (errors.datetime?.hasError) {
            runValidationTasks("datetime", value);
          }
          setDatetime(value);
        }}
        onBlur={() => runValidationTasks("datetime", datetime)}
        errorMessage={errors.datetime?.errorMessage}
        hasError={errors.datetime?.hasError}
        {...getOverrideProps(overrides, "datetime")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              datetime,
              name: value,
              description,
              assignee,
              group,
              workflow,
              related_data,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              datetime,
              name,
              description: value,
              assignee,
              group,
              workflow,
              related_data,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Assignee"
        isRequired={false}
        isReadOnly={false}
        value={assignee}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              datetime,
              name,
              description,
              assignee: value,
              group,
              workflow,
              related_data,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.assignee ?? value;
          }
          if (errors.assignee?.hasError) {
            runValidationTasks("assignee", value);
          }
          setAssignee(value);
        }}
        onBlur={() => runValidationTasks("assignee", assignee)}
        errorMessage={errors.assignee?.errorMessage}
        hasError={errors.assignee?.hasError}
        {...getOverrideProps(overrides, "assignee")}
      ></TextField>
      <TextField
        label="Group"
        isRequired={false}
        isReadOnly={false}
        value={group}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              datetime,
              name,
              description,
              assignee,
              group: value,
              workflow,
              related_data,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.group ?? value;
          }
          if (errors.group?.hasError) {
            runValidationTasks("group", value);
          }
          setGroup(value);
        }}
        onBlur={() => runValidationTasks("group", group)}
        errorMessage={errors.group?.errorMessage}
        hasError={errors.group?.hasError}
        {...getOverrideProps(overrides, "group")}
      ></TextField>
      <TextField
        label="Workflow"
        isRequired={false}
        isReadOnly={false}
        value={workflow}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              datetime,
              name,
              description,
              assignee,
              group,
              workflow: value,
              related_data,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.workflow ?? value;
          }
          if (errors.workflow?.hasError) {
            runValidationTasks("workflow", value);
          }
          setWorkflow(value);
        }}
        onBlur={() => runValidationTasks("workflow", workflow)}
        errorMessage={errors.workflow?.errorMessage}
        hasError={errors.workflow?.hasError}
        {...getOverrideProps(overrides, "workflow")}
      ></TextField>
      <TextField
        label="Related data"
        isRequired={false}
        isReadOnly={false}
        value={related_data}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              datetime,
              name,
              description,
              assignee,
              group,
              workflow,
              related_data: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.related_data ?? value;
          }
          if (errors.related_data?.hasError) {
            runValidationTasks("related_data", value);
          }
          setRelated_data(value);
        }}
        onBlur={() => runValidationTasks("related_data", related_data)}
        errorMessage={errors.related_data?.errorMessage}
        hasError={errors.related_data?.hasError}
        {...getOverrideProps(overrides, "related_data")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        value={createdAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              datetime,
              name,
              description,
              assignee,
              group,
              workflow,
              related_data,
              createdAt: value,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        value={updatedAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              datetime,
              name,
              description,
              assignee,
              group,
              workflow,
              related_data,
              createdAt,
              updatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || sIGNALSModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || sIGNALSModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
