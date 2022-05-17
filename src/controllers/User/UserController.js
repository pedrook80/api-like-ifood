const User = require('../../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserController = {

    async createUser(req, res) {

        const {password, email} = req.body

        try {
            const userExist = await User.findOne({ email })

            if(!email) return res.status(200).json({msg:'Favor escrever um email!'})

            if(!password) return res.status(200).json({msg:'Favor digitar uma senha!'})

            if(userExist) return res.status(200).json({msg:'Email já utilizado! Favor escolher outro!'})

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            const newUser = await User.create({password:hash, email})
            return res.status(200).json(newUser)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async getUsers(req, res) {       

        try { 

            const users = await User.find()
            return res.status(200).json(users)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async getUserById(req,res) {

        const { user_id } = req.params

        try {

            const user = await User.findById(user_id)
            return res.status(200).json(user)

        } catch(err) {

            return res.status(400).send(err)

        }

    },

    async login(req, res) {

        const { email, password } = req.body

        try {

            if(!email) return res.status(200).json({msg:'Favor escrever um email!'})

            if(!password) return res.status(200).json({msg:'Favor digitar uma senha!'})

            const user = await User.findOne({ email })

            if(!user) return res.status(200).json({msg:'Usuario não encontrado!'})

            const passwordCheck = bcrypt.compareSync(password, user.password)
           
            if(!passwordCheck) return res.status(200).json({msg:'Dados incorretos!'})

            const secret = process.env.SECRET

            const token = jwt.sign(
                {
                id: user._id,
                email:user.email
                },
                secret
            )
            
            
            return res.status(200).json({msg:'Sucesso!',token})

        } catch(err) {
            console.log(err)
            return res.status(400).json(err)

        }

    }

    

}

module.exports = UserController