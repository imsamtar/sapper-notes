export function get(req, res){
    req.session.user = null;
    res.redirect('/');
}