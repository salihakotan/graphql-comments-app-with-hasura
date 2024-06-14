import { gql } from "@apollo/client";

export const GET_USERS = gql`

    query getAllUsers{
        users{
            id
            fullName
        }
    }

`

export const NEW_COMMENT_MUTATION =gql`
mutation createComment($input:comments_insert_input!){
  insert_comments_one(object:$input){
    id,text
  }
}
`



export const GET_POST_COMMENTS = gql`
query getComments($id:ID!){
  post(id:$id){
    comments {
      id
      text
      user{id,fullname,profile_photo}
    }
   
  }
}
`

export const COMMENTS_SUBSCRIPTIONS =gql`
subscription getComments($post_id: Int!) {
  comments(where: {post_id: {_eq: $post_id}}) {
    text
    id
    user {
      id
      fullName
      profile_photo
    }
  }
}

`