import bcrypt from 'bcrypt';
import User from '../../models/User';


export async function post(req, res){
    try{
        let { username, password } = req.body;
        let user = await User.findOne({
            $or: [ { username }, { email: username }]
        });

        let isValidPassword = await bcrypt.compare(password, user.password);
        if(isValidPassword){
            req.session.user = user._id;
            res.json({
                ok: true
            });
        }
        else throw 'Invalid Password';
    }catch(err){
        res.send({
            ok: false
        });
    }
}