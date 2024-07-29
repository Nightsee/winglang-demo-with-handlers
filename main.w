bring cloud;
bring dynamodb;

// ressources
let website = new cloud.Website(path: "./public");
let api = new cloud.Api(cors: true);
website.addJson("config.json", { Api: api.url });
let counter = new cloud.Counter();
let db = new dynamodb.Table(
  attributes: [{
      name: "id",
      type: "S",
    },],
    hashKey: "id",
); 

//Handlers definitions
class Handlers {
  pub extern "./Handlers/Delete.js" inflight static Delete(deleteFromDb: inflight (Json): void, taskId: Json): str;//bool;
  pub extern "./Handlers/Get.js" inflight static Getter(scanDb: inflight (): str): str;
  pub extern "./Handlers/Add.js" inflight static Add(count: num,addToDb: inflight (Json): void, data: Json): str;//bool;
}

// wrapping methods inside inflight functions
let deleteFromDb = inflight (condition: Json) => {
  let tmp = db.delete(Key: condition, ReturnValues: "ALL_OLD");
  return tmp;
};
let scanDb = inflight () => {
  let data = Json.stringify(Json {items: db.scan().Items});
  return data;
};
let addtoDb = inflight (data: Json) => {
  db.put(Item: data);
};

//serverless functions using the @inflight method
// let addTask = new cloud.Function(@inflight("./Handlers/Add.ts", lifts: [{obj: counter, ops:["inc"]}, {obj: db, ops:["put"]}])) as "Add Task";
// let deleteTask = new cloud.Function(@inflight("./Handlers/Delete.js", lifts: [{obj: db, ops:["scan"]}])) as "Delete Task";
// let getTasks = new cloud.Function(@inflight("./Handlers/Get.js")) as "get tasks";

// API endpoints

// without lambda functions

api.get("/", inflight () => {
  let res = Handlers.Getter(scanDb);
  return cloud.ApiResponse.parseJson(res);
});

api.post("/add", inflight (request: cloud.ApiRequest) => {
  let res = Handlers.Add(counter.inc(), addtoDb, request.body!);
  return cloud.ApiResponse.parseJson(res);
});

api.delete("/delete/:id", inflight (request: cloud.ApiRequest) => {
  let res = Handlers.Delete( deleteFromDb, {id: request.vars.get("id")});
  return cloud.ApiResponse.parseJson(res);
});

