import app from './app';
import config from './config/config';

const server = app.listen(config.PORT)

;(() => {
    try {
        // Database Connection
        // eslint-disable-next-line no-console
        console.info(`Application_Started`, {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL
            }
        })
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`APPLICATION_ERROR`, {meta: err});
        
        server.close((error) => {
            if(error){
                // eslint-disable-next-line no-console
                console.error(`APPLICATION_ERROR`, {meta: err});
            }

            process.exit(1)
        })
    }
})()
