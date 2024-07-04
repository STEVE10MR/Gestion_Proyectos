import dotenv from 'dotenv'

dotenv.config();

export default (req,point)=>{
    const baseUrl = process.env.BASE_URL || `${req.protocol}://${req.get('host')}`;
    return `${baseUrl}/${point}`;
}

