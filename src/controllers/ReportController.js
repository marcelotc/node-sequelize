const { Op } = require('sequelize');
const User = require('../model/User');

module.exports = {
    async show(req, res) {
        //Encontrar usuários que tem email que termina com @gmail.com
        //Desses usuário buscar todos os usuário que moram na rua "teste"
        //Desses usuário buscar tecnologias que começam com react

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.con'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Rua teste' } }, //endereços
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    }
                },
            ]
        })

        return res.json(users);
    }
};