import Axios from "@/core/request";

const url = import.meta.env.DEV ? "/epgms" : window.api.epgms;

const epgmsRequest = new Axios(url).getInstance();

export default epgmsRequest;
