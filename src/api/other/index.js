import Axios from "@/core/request";

const url = import.meta.env.DEV ? "/other" : window.api.others;

const otherRequest = new Axios(url).getInstance();

export default otherRequest;
