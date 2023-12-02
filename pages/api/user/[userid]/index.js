import { getUser, deleteUser, updateUser } from "@/prisma/user"

const handler = async (req, res) => {
    const { userid } = req.query

    if(req.method === 'GET'){
        try{
            const user = await getUser(userid)
            return res.status(200).json(user)
        }catch(err){
            return res.status(500).json({error: "Internal Server Error"})
        }
    }

    if(req.method === 'DELETE'){
        try{
            const {user, error} = await deleteUser(userid);
            if(error) throw new Error(error);
            return res.status(200).json({user});
        } catch(error){
            return res.status(500).json({error: error.message});
        }
    }


     // update user
     if(req.method === 'PUT'){
        try{
            const {user, error} = await updateUser(req.body.id, req.body.update);
            if(error) throw new Error(error);
            return res.status(200).json({user});
        } catch(error){
            return res.status(500).json({error: error.message});
        }
    }
}

export default handler