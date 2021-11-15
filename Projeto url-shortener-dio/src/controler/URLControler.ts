import { URLModel } from "database/model/URL";
import { Request, response, Response } from "express";
import shortid from 'shortid';
import { config } from '../config/Constants';

export class URLControler{
    public async shorten(req: Request, res: Response): Promise<void>{
        //ver se a URL já existe
        const { originURL } = req.body;
        const url = await URLModel.findOne({ originURL })
        if(url){
            response.json(url);
            return;
        }
        //criar o hash para essa URL        
        const hash = shortid.generate();
        const shortURL = `${config.API_URL}/${hash}`
        //salvar a URL no banco
        const newURL = await URLModel.create({ hash, shortURL, originURL })
        //retornar a URL salva
        res.json({ newURL })
    }

    public async redirect(req: Request, res: Response): Promise<void>{
        //pegar hash da URL
        const { hash } = req.params
        const url = await URLModel.findOne({ hash })

        if(url){
            res.redirect(url.originURL);
            return;
        }
        res.status(400).json({ error: "URL not found" })
        
    }
};