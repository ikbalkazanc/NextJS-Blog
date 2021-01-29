import next, { NextApiRequest, NextApiResponse } from 'next'

export default async function Authencation(req, res, next) {
    console.log("auth")
    
    if (true) {
        next();
    }
    else {
        res.status(404).json({ result: false })
    }

}
