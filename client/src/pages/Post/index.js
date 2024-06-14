import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST } from "./queries";
import Loading from "components/Loading";
import { Image, Typography } from "antd";
import styles from "./styles.module.css";
import Comments from "./Comments";

const { Title } = Typography;

function Post() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // console.log(data);

  const { posts_by_pk } = data;

  return (
    <div>
      <Title level={3}>{posts_by_pk.title}</Title>
      <Image width="95%" height="auto" src={posts_by_pk.cover} />
      <div className={styles.description}>{posts_by_pk.description}</div>

      <Comments post_id={id}/>
    </div>
  );
}

export default Post;
