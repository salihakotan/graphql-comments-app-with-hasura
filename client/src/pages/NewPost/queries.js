import { gql } from "@apollo/client";

export const GET_USERS =gql`

    query getAllUsers {
        users{
            id,
            fullName
        }
    }

`

export const NEW_POST_MUTATION = gql`

mutation createPost($input: posts_insert_input!){
 insert_posts_one(object: $input){
  id,title,description
}
}
`