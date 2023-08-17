import axios from "axios";
import {ENV_VARS} from "@/app/shared/utils/env";

export const clientApi = axios.create({
    baseURL: ENV_VARS.API_URL,
});
