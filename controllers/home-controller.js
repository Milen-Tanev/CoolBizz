/* globals module */

module.exports = function (data) {
    return {
        home(req, res) {
            return res.render('home/home', {
                user: req.user
            });
        },
        information(req, res) {
            return res.render('home/about-us',
            {
                user: req.user,
                Members: [
                {
                    name: 'Velin',
                    github: 'https://github.com/VelinYordanov'
                },
                {
                    name: 'Viliana',
                    github: 'https://github.com/VilianaZhilkova'
                },
                {
                    name:'Milen',
                    github:'https://github.com/Milen-Tanev'
                },
                {
                    name:'Mihail',
                    github:'https://github.com/singularity0'
                }
                ]
            });
        }
    };
};