import Global from "@/Global";
import axios from "axios";
export default class ServiceCoches {
    getAllCoches() {
        return new Promise(function(resolve) {
            let coches = [];
            let request = "webresources/coches";
            let url = Global.urlCoches + request;
            axios.get(url).then(response => {
                coches = response.data;
                resolve(coches);
            })
        })
    }
}