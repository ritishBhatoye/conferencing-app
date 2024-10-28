//providers are the component that are used to wrap the our ENTIRE APPLICATION and fuse it to use the additional functionality 
import { tokenProvider } from '@/actions/stream.actions';
import Loader from '@/components/Loader';
import { useUser } from '@clerk/nextjs';
import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
  } from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
//   const userId = 'user-id';
//   const token = 'authentication-token';
//   const user: User = { id: userId };
  
//   const client = new StreamVideoClient({ apiKey, user, token });
//   const call = client.call('default', 'my-first-call');
//   call.join({ create: true });
  
 const StreamVideoProvider= ({children}:{children:ReactNode}) => {
    
    const [videoClient,setVideoClient]=useState<StreamVideoClient>();
    const {user,isLoaded}=useUser();

    useEffect(()=>
    {
        //if the user is PRESENT and having the streaming API 
     if(!isLoaded || !user) return;    
     if(!apiKey)  throw new Error('Stream API key missing')
        //then we can create the new video client based upon that
     const client=new StreamVideoClient({
        apiKey,
        user:
        {
            id:user?.id,
            name:user?.username || user?.id,
            image:user?.imageUrl,


        },
        //this token provider is used to verify that this user is that user
        tokenProvider,

     });

    setVideoClient(client);
    },[user,isLoaded]);

    if(!videoClient) return <Loader />;

    return (
      <StreamVideo client={videoClient}>
        {children}
      </StreamVideo>
    );
  };

export default StreamVideoProvider;