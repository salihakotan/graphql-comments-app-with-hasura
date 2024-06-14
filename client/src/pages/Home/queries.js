import { gql } from "@apollo/client";





// export const GET_POSTS = gql`
//   query getAllPosts {
//     posts {
//       id
//       title
//       description
//       short_description
//       user {
//         profile_photo
//       }
//     }
//   }
// `;

export const POSTS_SUBSCRIPTION = gql`
  
  subscription posts{
    posts(order_by: {id: desc}) {
      id
      title
      description
      short_description
      user {
        profile_photo
      }
    }
}
  `;
