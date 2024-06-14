
import { useQuery, useSubscription } from '@apollo/client';
import { Avatar, List } from 'antd';
import Loading from 'components/Loading';
import { GET_POSTS, POSTS_SUBSCRIPTION } from './queries';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css"
import { useEffect } from 'react';




function Home() {


  const {loading,error,data} = useSubscription(POSTS_SUBSCRIPTION)

  

  // console.log("datahome",data)

  // useEffect(()=> {
  //   subscribeToMore({      
  //     document:POSTS_SUBSCRIPTION,
  //     updateQuery:(prev, {subscriptionData})=> {
  //       console.log("prev 0  ", prev)


  //       if(!subscriptionData.data) return prev.posts;

  //       if(!subscriptionData.data.posts) return prev.posts;

  //       console.log("subdatahome ", subscriptionData)


  //       return {
  //         posts:subscriptionData.data
  //         // posts:[
  //         //   subscriptionData.data.posts,
  //         //   ...prev.posts, 
  //         // ]
  //       }
  //     },
  //     // onError: err => console.error("ERROR: ",err.message)
  //   })
  // },[subscribeToMore])

  if(loading){
    return <Loading/>
  }


  if(error){
    return <div>Error {error.message}</div>
  }


  return (
    <div>
    
        <List
      className="demo-loadmore-list"
      loading={false}
      itemLayout="horizontal"
      // loadMore={loadMore}
      dataSource={data.posts}
      renderItem={(item) => (
       
        <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.user.profile_photo} />}
              title={<Link to={`/post/${item.id}`}>{item.title}</Link>}
              description={<Link className={styles.listItemDesc} to={`/post/${item.id}`}>{item.short_description}</Link>}
            />
        </List.Item>
      )}
    />
      
      
    </div>
  )
}

export default Home