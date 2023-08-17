import {clientApi} from "@/api/axios";
import {GithubUser} from "@/app/features/github/types/users";

class GithubService {
   async getUserByName(username: GithubUser['login']) {
      return clientApi.get<GithubUser>(`users/${username}`)
   }
}

export default new GithubService();
