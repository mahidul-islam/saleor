import gql from "graphql-tag";
import { Query, QueryProps } from "react-apollo";
import {
  MenuDetailsQuery,
  MenuDetailsQueryVariables,
  MenuListQuery,
  MenuListQueryVariables
} from "../gql-types";

export const TypedMenuListQuery = Query as React.ComponentType<
  QueryProps<MenuListQuery, MenuListQueryVariables>
>;

export const menuListQuery = gql`
  query MenuList($first: Int, $after: String, $last: Int, $before: String) {
    menus(before: $before, after: $after, first: $first, last: $last) {
      edges {
        node {
          id
          name
          items {
            totalCount
          }
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;

export const TypedMenuDetailsQuery = Query as React.ComponentType<
  QueryProps<MenuDetailsQuery, MenuDetailsQueryVariables>
>;

export const menuDetailsQuery = gql`
  query MenuDetails(
    $id: ID!
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    menu(id: $id) {
      id
      name
      items(before: $before, after: $after, first: $first, last: $last) {
        edges {
          node {
            id
            name
            url
            category {
              id
              name
            }
            collection {
              id
              name
            }
            page {
              id
              name: title
            }
            children {
              totalCount
            }
          }
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  }
`;

export const TypedMenuItemDetailsQuery = Query as React.ComponentType<
  QueryProps<MenuDetailsQuery, MenuDetailsQueryVariables>
>;

export const menuItemDetailsQuery = gql`
  query menuItem(
    $id: ID!
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    menuItem(id: $id) {
      id
      parent {
        id
        name
      }
      menu {
        id
      }
      url
      category {
        id
        name
      }
      collection {
        id
        name
      }
      page {
        id
        name: title
      }
      children(before: $before, after: $after, first: $first, last: $last) {
        edges {
          node {
            id
            url
            category {
              id
              name
            }
            collection {
              id
              name
            }
            page {
              id
              name: title
            }
          }
        }
      }
    }
  }
`;
