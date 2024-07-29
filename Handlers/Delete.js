// delete Item
exports.Delete = async function (deleteFromDb, taskid) {
    try {
        let res = await deleteFromDb(taskid);
        if(res){
            return JSON.stringify({status: 200});
        }else{
            return JSON.stringify({status: 504});
        }
    } catch (err) {
        return JSON.stringify({status: 504});
    }
}