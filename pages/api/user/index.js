import { createUser, getUsers } from "@/prisma/user";

const handler = async (req, res) => {

    if(req.method === 'GET'){
        try{
            const {users, error} = await getUsers();
            if(error) throw new Error(error);
            return res.status(200).json({users});
        } catch(error){
            return res.status(500).json({error: error.message});
        }
    }

    if(req.method === 'POST'){
        try{
            const {user, error} = await createUser(req.body);
            if(error) throw new Error(error);
            return res.status(200).json({user});
        } catch(error){
            return res.status(500).json({error: error.message});
        }
    }




    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);

}

export default handler;