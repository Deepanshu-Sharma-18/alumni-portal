import React from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";

const CreateThread = () => {
  return (
    <div className="sticky md:block top-0 z-20 shadow bg-white p-4 md:p-2 rounded-md w-full">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Input
          type="text"
          className="text-base"
          placeholder="search something....."
        ></Input>
        <Link href={"notifications"} className="md:hidden">
          <div className="flex items-end gap-3 text-xl">
            <IoIosNotificationsOutline size={28}></IoIosNotificationsOutline>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CreateThread;
