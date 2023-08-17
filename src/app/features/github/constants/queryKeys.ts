import {GithubUser} from "@/app/features/github/types/users";

export enum GithubQueryKeys {
   USER = 'githubUser'
}
export const getGithubUserKey = (username: GithubUser['login']) => `${GithubQueryKeys.USER}/${username}`
