import { graphqlOperation } from 'aws-amplify';

export const createSignal = /* GraphQL */ `
  mutation CreateSignal(
    $input: CreateSignalInput!
    $condition: ModelSignalConditionInput
  ) {
    createSignal(input: $input, condition: $condition) {
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
    }
  }
`;

export const updateSignal = /* GraphQL */ `
  mutation UpdateSignal(
    $input: UpdateSignalInput!
    $condition: ModelSignalConditionInput
  ) {
    updateSignal(input: $input, condition: $condition) {
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
    }
  }
`;

export const deleteSignal = /* GraphQL */ `
  mutation DeleteSignal(
    $input: DeleteSignalInput!
    $condition: ModelSignalConditionInput
  ) {
    deleteSignal(input: $input, condition: $condition) {
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
    }
  }
`;
