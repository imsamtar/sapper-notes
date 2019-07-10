import bcrypt from 'bcrypt';
import User from '../../models/User';


export async function post(req, res){
    try{
        let { name, username, email, password } = req.body;
        password = await bcrypt.hash(password, 12);
        let user = { name, username, email, password };
        user = await new User(user).save();
        user['password'] = undefined;
        res.send({
            ok: true,
            user
        });
    }catch(err){
        res.send({
            ok: false
        });
    }
}