import { URLControler } from 'controler/URLControler';
import { MongoConnection } from 'database/MongoConnection';
import express, { Request, Response} from 'express';

const api = express();
api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlControler = new URLControler()
api.post('/shorten', urlControler.shorten);
api.get("/:hash", urlControler.redirect);

api.listen(5000, () => console.log('Express listening'));