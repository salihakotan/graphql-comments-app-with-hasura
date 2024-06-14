import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Avatar, Badge } from "antd";
import { useQuery, useSubscription } from "@apollo/client";
import { GET_POST_COUNT, POST_COUNT_SUBSCRIPTION } from "./queries";


function PostCounter() {


    //just usesubscription
    // const {loading,data} = useSubscription(POST_COUNT_SUBSCRIPTION)

    const {loading,error,data} = useSubscription(POST_COUNT_SUBSCRIPTION)


    // console.log("counter data", data)


    // useEffect(()=> {
    //   subscribeToMore({
    //     document:POST_COUNT_SUBSCRIPTION,
    //     updateQuery: (prev, {subscriptionData})=> {
         
    //       if(!subscriptionData.data) return prev.postCount;
  
    //       return{
    //         postCount:subscriptionData.data.postCount
    //       }
    //     }
    //   })
    // },[subscribeToMore])
  
    // if(loading){
    //   return <Loading/>
    // }
  
  
    if(error){
      return <div>Error {error.message}</div>
    }


    const postCount = data?.posts_aggregate?.aggregate?.count
    
    if(!postCount) {
      return
    }

  return (
    
      <div className={styles.container}>
      <Badge count={loading ? "?" : postCount}>
        <Avatar shape="square" size="medium"> 
        <span className={styles.counterTitle}>Posts</span>
        </Avatar>
      </Badge>
    </div>
  )
}

export default PostCounter;
