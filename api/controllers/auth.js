const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.register = async (req, res) => {
    try{
      const {name, email} = req.body;
      const user = await prisma.user.create({
        data: {
          name,
          email
        }
      });
      res.status(201).json(user);
    } catch(err){
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Unable to create user' });
    }
    
};

