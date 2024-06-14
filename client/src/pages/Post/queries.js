import { gql } from "@apollo/client";

// export const GET_POST = gql`
// query post($id:ID!){
//   post(id:$id){
//     id,
//     title,
//     description,
//    cover,
//     user{
//       profile_photo
//     }
//   }
// }
// `

export const GET_POST = gql`
query post($id: Int!) {
  posts_by_pk(id: $id) {
    id
    # short_description
    title
    description
    cover
    # user_id
    # user {
    #   age
    #   fullName
    #   profile_photo
    # }
  }
}

`