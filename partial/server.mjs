import Build from "./index.mjs"
const server = Build();
const start = async () => {
    try {
        await server.listen(3000)
        server.log.info(server.printRoutes());
        
    } catch (error) {
        server.log.error(`Error initializing ${error}`)
    }
}
start();