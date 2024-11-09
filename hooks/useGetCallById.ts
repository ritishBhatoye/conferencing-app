import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react"
export const useGetCallById=(id:string | string[])=>{
    const[call,setCall]=useState<Call>();
    const [isCallLoading,setIsCallLoading]=useState(true);
    const client=useStreamVideoClient();

    useEffect(()=>{
        //we run the useEffect when the clieint changes or the id of the cleint CHANGES
            if(!client) return;
//u can use the async function as it is with the useEffect unless U DEFINE IT 
            const loadCall=async()=>{
const {calls}=await client.queryCalls({
    filter_conditions:{
        id  
    }
})
if(calls.length>0) setCall(calls[0]);
setIsCallLoading(false);
             }
            loadCall();
    },[client,id]);

    return {call,isCallLoading};
} 