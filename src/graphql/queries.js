/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSIGNALS = /* GraphQL */ `
  query GetSIGNALS($id: ID!) {
    getSIGNALS(id: $id) {
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
export const listSIGNALS = /* GraphQL */ `
  query ListSIGNALS(
    $filter: ModelSIGNALSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSIGNALS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSIGNALS = /* GraphQL */ `
  query SyncSIGNALS(
    $filter: ModelSIGNALSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSIGNALS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
