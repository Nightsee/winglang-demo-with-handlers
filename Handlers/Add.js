exports.Add = async function (count, addToDb, data){
    try {
        let payload = JSON.parse(data);
        let taskdata = {id: `${count}`, task: payload.name};
        await addToDb(taskdata);
        return JSON.stringify({status: 200});
    } catch (error) {
        console.log(error);
        return JSON.stringify({status: 504});
    }
}