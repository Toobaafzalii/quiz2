import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsersList } from "../../api/users.api";
import { IoPersonCircleSharp } from "react-icons/io5";

const UsersPage: React.FC = async () => {
  let users = await fetchUsersList();

  // const users = useQuery({
  //   queryKey: ["fetching-users-list"],
  //   queryFn: () => fetchUsersList(),
  // });

  // console.log(users.data);

  // if (users.isError) {
  //   return <div>Error fetching users!</div>;
  // }

  // if (users.data?.length === 0) {
  //   return <div>No users found.</div>;
  // }

  return (
    <div className="grid grid-cols-1 max-w-[1200px] mx-auto space-y-3 px-4 py-3 min-h-screen h-full ">
      {users &&
        users?.users.map((user: Iuser) => (
          <div
            key={user.id}
            className="bg-gray-100 rounded-lg shadow-xl flex-col min-w-full space-y-3 px-4 py-3"
          >
            <div className="inline-flex items-center gap-1">
              <h2 className="text-lg font-semibold text-gray-800">
                <IoPersonCircleSharp className="w-11 h-11 fill-gray-400" />
                {user.firstName} {user.lastName}
              </h2>
            </div>

            <p>{user.email}</p>
          </div>
        ))}
    </div>
  );
};

export default UsersPage;
