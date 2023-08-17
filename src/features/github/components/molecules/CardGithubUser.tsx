import {FC} from 'react'
import Image from "next/image";
import {GithubUser} from "@/shared/types/users";

type Props = {
   user: GithubUser;
};

const CardGithubUser: FC<Props> = ({user}) => {
   return (
       <figure className="bg-white border-2 border-dashed border-blue-600 p-4 grid gap-3 shadow-md rounded-lg max-w-md">
          <div>
             <Image width={70} height={70} src={user.avatar_url} alt={`${user.login}'s avatar`} className="max-w-xs rounded-full mx-auto"/>
             <figcaption className="text-xl mt-1 font-semibold">{user.login} ({user?.name})</figcaption>
          </div>
          {user.bio && <p>{user.bio}</p>}
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="block text-blue-500 hover:underline">
             View Profile
          </a>
       </figure>
   );
};

export default CardGithubUser;
