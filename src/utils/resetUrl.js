import dotenv from 'dotenv'

dotenv.config();

export default (req,point)=>{
    const baseUrl = process.env.BASE_URL || `${req.protocol}://${req.get('host')}`;
    console.log(`${baseUrl}/${point}`)
    return `${baseUrl}/${point}`;
}

