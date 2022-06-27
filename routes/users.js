import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Fda",
        age: 23
    },
    {
        firstName: "Jelly",
        lastName: "Beans",
        age: 33
    }
]

router.get('/', (req, res) => {
    console.log(users);
    res.send('Hello');
});

export default router;