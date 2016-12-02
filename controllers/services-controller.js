module.exports = function(data) {
    return {
        getAllServices(req,res) {
            data.getAllServices().then(services => {
                res.render('drones/services.pug', {
                    services:services
                });
            })
        }
    }
}