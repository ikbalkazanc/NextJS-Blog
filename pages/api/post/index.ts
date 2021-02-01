import nextConnect from 'next-connect';
import next, { NextApiRequest, NextApiResponse } from 'next'
import AuthenticationMiddleware from "../../../source/middlewares/AuthenticationMiddleware"
import PostService from '../../../source/services/PostService'

export default nextConnect<NextApiRequest, NextApiResponse>()

    .use<NextApiRequest, NextApiResponse>((req, res, next) => {
        console.log("custom middleware")
        next();
    })

    .use<NextApiRequest, NextApiResponse>(AuthenticationMiddleware)

    .get(async (req, res) => {
        var posts = await PostService.GetAll();
        res.statusCode = 200
        res.json(posts)

    })

    .post(async (req, res) => {
        res.statusCode = 200
        var post = await PostService.Add(req.body);
        res.json(post)

    })
    
    .delete(async (req, res) => {
        console.log(req.body.id)
        if (req.body.id == undefined) {
            res.statusCode = 400         
        }
        else {
            res.statusCode = 200
            await PostService.Delete(req.body.id);
        }
        res.end();
    });

