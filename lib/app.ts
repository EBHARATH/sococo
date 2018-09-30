import * as express from 'express';
import * as bodyParser from 'body-parser';
import {Routes} from './routes/bookRoutes';
import * as mongoose from 'mongoose';


class App{
    public app : express.Application;
    public routePrv:Routes=new Routes();
    public mongoURL:string='mongodb://localhost:27017/BooksDB';

    constructor(){
        this.app=express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config():void{
        //to support application/json type post data
        this.app.use(bodyParser.json());

        //to support application/x-www-form-urlencoded  post data
        this.app.use(bodyParser.urlencoded({extended:false}));
    }

    private mongoSetup():void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoURL,{ useNewUrlParser: true }).then(
            () => {
                console.log("connect successful")
            },
            err => {
                console.log(err)
            }
        );
    }
}

export default new App().app;