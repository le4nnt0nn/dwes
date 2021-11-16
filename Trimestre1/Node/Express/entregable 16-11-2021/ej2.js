const winston = require('winston');

const logConfiguration = {
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize({
            all: true
        }),
        winston.format.timestamp({
           format: 'MMM-DD-YYYY HH:mm:ss'
       }),
        winston.format.printf(info => `${[info.timestamp]}: ${info.level}: ${info.message}`),
    )
};

const logger = winston.createLogger(logConfiguration);

/* logger.log({
    // Message to be logged
    message: 'Hello, Winston!',

    // Level of the message logging
    level: 'info'
}); */
// Log a message
logger.info('Información, Winston!');
logger.warn('Ten cuidado, Winston!');
logger.error('ERROR, WINSTON!');