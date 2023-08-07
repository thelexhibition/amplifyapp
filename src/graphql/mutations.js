/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSIGNALS = /* GraphQL */ `
  mutation CreateSIGNALS(
    $input: CreateSIGNALSInput!
    $condition: ModelSIGNALSConditionInput
  ) {
    createSIGNALS(input: $input, condition: $condition) {
      id
      datetime
      name
      description
      assignee
      group
      workflow
      related_data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateSIGNALS = /* GraphQL */ `
  mutation UpdateSIGNALS(
    $input: UpdateSIGNALSInput!
    $condition: ModelSIGNALSConditionInput
  ) {
    updateSIGNALS(input: $input, condition: $condition) {
      id
      datetime
      name
      description
      assignee
      group
      workflow
      related_data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteSIGNALS = /* GraphQL */ `
  mutation DeleteSIGNALS(
    $input: DeleteSIGNALSInput!
    $condition: ModelSIGNALSConditionInput
  ) {
    deleteSIGNALS(input: $input, condition: $condition) {
      id
      datetime
      name
      description
      assignee
      group
      workflow
      related_data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
