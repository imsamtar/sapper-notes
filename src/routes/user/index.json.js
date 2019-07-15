import User from '../../models/User';

export function get(req, res){
    if(req.session.user){
        User.findById(req.session.user).select('_id name username email notes')
        .then(user => res.json({ok:true,user}));
    }
    else {
        res.json({
            ok: false
        });
    }
}

export function patch(req, res){
    if(req.session.user){
        // console.log(req.body);
        User.updateOne({_id: req.session.user}, { 
            $set: { notes: req.body.notes }
        })
        .then(user => {
            res.json({ok:true,user})
        });
    }
    else {
        res.json({
            ok: false
        });
    }
}
