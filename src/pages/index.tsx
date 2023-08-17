import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import GithubService from "@/app/features/github/services/github.service";
import {getGithubUserKey} from "@/app/features/github/constants/queryKeys";
import Loader from "@/app/shared/ui/atoms/Loader";
import CardGithubUser from "@/app/features/github/components/molecules/CardGithubUser";
import FormUserSearch, {Props as FormUserSearchProps} from "@/app/features/github/components/organisms/FormUserSearch";

export default function Home() {
   const [username, setUsername] = useState('');
   const {isError, data, isFetching, isSuccess} = useQuery([getGithubUserKey(username)], () => GithubService.getUserByName(username), {
      enabled: !!username,
   })

   const handleUserFormSubmit: FormUserSearchProps['onSubmit'] = ({username}) => {
      setUsername(username);
   };

   const user = data?.data;
   const isPlaceholderVisible = !isFetching && !isSuccess;

   return (
       <main className={`flex flex-col items-center text-center justify-center`}>
          <h1 className="text-4xl font-bold mb-6">GitHub User Search</h1>
          <FormUserSearch onSubmit={handleUserFormSubmit}/>

          {isPlaceholderVisible && <h2 className='text-lg mb-2'>Enter a username (like octocat) to search!</h2>}
          {isFetching && <Loader width={250} height={250}/>}
          {isError && <b className="text-red-500 text-2xl">User {username} not found.</b>}
          {user && (<CardGithubUser user={user}/>)}
       </main>
   )
}
