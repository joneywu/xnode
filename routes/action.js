
/*
 * POST home page.
 */

exports.doNothing = function(req, res){
    //res.render('index', { title: 'Express loopu', body: 'yahoo' });
    var resObj = {};
    console.log('body: ' + JSON.stringify(req.body));
    //res.send(req.body);
    res.json({'sucess': 2 });

};