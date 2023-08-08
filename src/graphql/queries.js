/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listSignals = /* GraphQL */ `
  query ListSignals(
    $filter: ModelSIGNALSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSignals(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
