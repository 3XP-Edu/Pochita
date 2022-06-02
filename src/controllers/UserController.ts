import { kobeniClient } from "../services/kobeni"
//extrair para master se possível
class UserController{
    async create(req: any, res: any){
        const { email, username, password, taxId } = req.body;
        kobeniClient.registerUser({user: {email, username, password, taxId}}, (err: any, response: any) =>{
                if(err) console.error(err);
                else return res.json(response);
            })
    }

    async readOne(req: any, res: any){
        const { id } = req.params;
        kobeniClient.getUserById({ id }, (err: any, response: any) =>{
            if(err) console.error(err);
            else return res.json(response);
        });
    }

    async readAll(req: any, res: any){
        kobeniClient.getAllUsers({}, (err: any, response: any) =>{
            if(err) console.error(err);
            else return res.json(response);
        });
    }

    async update(req: any, res: any){
        const { id } = req.params;
        kobeniClient.updateUserById({id, user: req.body}, (err: any, response: any) =>{
            if(err) console.error(err);
            else return res.json(response);
        });
    }

    async delete(req: any, res: any){
        const { id } = req.params;
        kobeniClient.deleteUser({ id }, (err: any, response: any) =>{
            if(err) console.error(err);
            else console.log(response) 
            return res.send(202);
        });
    }
}

export { UserController };