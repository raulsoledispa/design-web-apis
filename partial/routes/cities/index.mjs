import Schema from "fluent-json-schema";
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig.js'
const schema = {
    querystring: Schema.object().prop("idd.type", Schema.string().required())
}
export default async function cities(app){
    app.get("/",  async(req,reply) => {
        var db = new JsonDB(new Config("db", true, false, '/'));

        console.log(req.query)

        //app.log.info(`query ${req.query}`)
        reply.send({ message: "Hello from cities"})
    })
}