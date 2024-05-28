import express from 'express';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';
import i18next from './config/supportedLngs.js';
import i18nextMiddleware from 'i18next-express-middleware';
import globalErrorHandler from './controllers/errorController.js';
import routers from './routes/index.js';


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	limit: 100,
	message: "ERROR_LIMIT"
})

const app = express()

app.use(helmet())

app.use('/api',limiter)

app.use(cors());

app.use(express.json({ limit: '10kb' }));

app.use(mongoSanitize())

app.use(hpp({
  whitelist: [
    'duration',
    'ratingsQuantity',
    'ratingsAverage',
    'maxGroupSize',
    'difficulty',
    'price'
  ]
}))

app.use(xss())
app.use(i18nextMiddleware.handle(i18next))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1', routers);

app.use(globalErrorHandler);

export default app;
