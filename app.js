const express = require('express');

const app = express();
const port = 3000;

const {sequelize} = require('./models');
const {User, Role, Kelompok} = require('./models');

app.use(express.json());

// User
app.get('/users', async (req, res) => {
    try {
        const data = await User.findAll({include: [Role, Kelompok]});

        res.status(200).json({
            data
        })
    } catch(err) {
        console.log(err)
    }
});

app.post('/users', async (req, res) => {
    try {
        let {email, password} = req.body;

        // console.log(email, password)
        let data = await User.create({email, password, RoleId: 2});

        res.status(201).json({
            data
        })
    } catch(err) {
        console.log(err)
    }
});

app.get('/kelompoks', async(req, res) => {
    try {
        let data = await Kelompok.findAll({include: User});

        res.json(data)
    } catch(err) {
        console.log(err)
    }
})

// ContactsGroups

app.post('/users-kelompoks', async (req, res) => {
    try {
        let {UserId, KelompokId} = req.body;

        let user = await User.findByPk(UserId);
        let kelompok = await Kelompok.findByPk(KelompokId);
        
        await user.addKelompok(kelompok);

        res.status(201).json({
            status: 'OK'
        })
    } catch(err) {
        console.log(err)
    }
})

app.listen(port, async () => {
    console.log('Running at port ' + port)
    await sequelize.authenticate();
    console.log('Connect to database')
})