import Fastify from "fastify";
import loader from "fastify-autoload";
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { parse } from "qs";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default function Build() {
    const app = Fastify({
        logger: true,
        querystringParser: str => parse(str)
    });
    
    app.register(loader, {
        dir: join(__dirname, 'routes')
    })
    return app
}