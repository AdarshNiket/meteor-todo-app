import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/todoRoutes';

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req,res) => {
	res.send(`Todo server is running on port ${PORT}`);
});

app.listen(PORT, () => {
	console.log(`Server started at http://localhost:${PORT}`)
});