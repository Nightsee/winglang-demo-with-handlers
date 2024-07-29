const { json } = require("express");

exports.Getter = async function (scanDb) {
    // try {
    //     let result = await scanDb();
    //     let tasks = JSON.parse(result).items;
    //     return JSON.stringify({success: true, tasks: tasks});
    // } catch (error) {
    //     return JSON.stringify({success: false});
    // }
    try {
        let result = await scanDb();
        let tasks = JSON.parse(result).items;
        return JSON.stringify({status: 200, body: JSON.stringify({tasks: tasks})});
    } catch (error) {
        return JSON.stringify({status: 504});
    }
}
