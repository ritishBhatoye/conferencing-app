import React,{ReactNode} from 'react'
import Image from 'next/image';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
interface MeetingModalProps
{
    isOpen: boolean;
    onClose:()=>void;
    title:string;
    className?:string;  
    children?:ReactNode;
    handleClick?:()=>void;
    buttonText?:string;
    image?:string;
    buttonIcon?:string; 
     
}

const MeetingModal = ({isOpen,onClose,title,className,children,handleClick, buttonText,image,buttonIcon}:MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose} 
    
    >
    {/* <DialogTrigger>Open</DialogTrigger> */}
    <DialogContent
    className="flex text-white w-full max-w-[520px] flex-col gap-6 border-none px-6 py-9 bg-dark-1"
    >
        <div className='flex flex-col gap-6'>
            {image && (
                <div>
                    <Image
                    src={image} 
                    alt="image"
                    width={72}
                    height={72}
                    />
                </div>
            )}
        <h1
        className={cn('text-3xl font-bold leading-[42px]',className)}
        >{title}</h1>
        {children} 
        <Button
        className='bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0'
        onClick={handleClick}
        >
            {buttonIcon &&(
                <Image src={buttonIcon} alt="button icon"
                width={13} height={13} />

            )}&nbsp;
             
                {buttonText || 'Schedule Meeting'}
        </Button>

        </div>
        
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  
  )
}

export default MeetingModal;
