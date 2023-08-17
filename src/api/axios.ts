import {ENV_VARS} from "@/shared/utils/env";
import axios from "axios";

export const clientApi = axios.create({
    baseURL: ENV_VARS.API_URL,
});
