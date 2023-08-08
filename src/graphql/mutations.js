/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSignals = /* GraphQL */ `
  mutation CreateSignals(
    $input: CreateSIGNALSInput!
    $condition: ModelSIGNALSConditionInput
  ) {
    createSignals(input: $input, condition: $condition) {
      id
      datetime
      name
      description
      assignee
      group
      workflow
      chart_data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateSignals = /* GraphQL */ `
  mutation UpdateSignals(
    $input: UpdateSIGNALSInput!
    $condition: ModelSIGNALSConditionInput
  ) {
    updateSignals(input: $input, condition: $condition) {
      id
      datetime
      name
      description
      assignee
      group
      workflow
      chart_data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteSignals = /* GraphQL */ `
  mutation DeleteSignals(
    $input: DeleteSIGNALSInput!
    $condition: ModelSIGNALSConditionInput
  ) {
    deleteSignals(input: $input, condition: $condition) {
      id
      datetime
      name
      description
      assignee
      group
      workflow
      chart_data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
