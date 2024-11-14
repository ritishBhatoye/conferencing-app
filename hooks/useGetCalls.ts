import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export const useGetCalls=()=>
{
    const [calls,setCalls]=useState<Call[]>([]);
    const [isLoading,setIsLoading]=useState(false);
    const client=useStreamVideoClient();

    const {user}=useUser();

    useEffect(()=>{
 const loadCalls=async()=>{
    if(!client || !user?.id) return ;
    
    setIsLoading(true);

    try{
         const {calls}=await client.queryCalls({
            sort:[{field:'starts_at',direction:-1}],
            filter_conditions:{
                starts_at:{$exits:true}
                
            }
         })
    }
    catch(error){
        console.log(error);
    }finally{
        setIsLoading(false);      
    }
 }

    },[client,user?.id])

}