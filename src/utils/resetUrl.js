require('dotenv').config();

export default (req,point)=>{
    const baseUrl = process.env.BASE_URL || `${req.protocol}://${req.get('host')}`;
    return `${baseUrl}/api/v1/${point}`;
}

