import {GithubUser} from "@/shared/types/users";
import {clientApi} from "@/api/axios";

class GithubService {
   async getUserByName(username: GithubUser['login']) {
      return clientApi.get<GithubUser>(`users/${username}`)
   }
}

export default new GithubService();
