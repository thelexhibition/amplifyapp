// Import the necessary query function from AWS Amplify
import { graphqlOperation } from 'aws-amplify';

// Define the listSignals query
export const listSignalsQuery = `
  query ListSignals {
    listSIGNALS {
      items {
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
  }
`;

// Define the getSignal query
export const getSignalQuery = `
  query GetSignal($id: ID!) {
    getSIGNAL(id: $id) {
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
