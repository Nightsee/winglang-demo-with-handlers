/// This file is generated by Wing.
export interface Lifts {
  counter: Pick<Counter$Inflight, "inc">
  db: Pick<Table$Inflight, "put">
};
type HandlerFunction<T> = T extends { handle: (...args: any[]) => any } ? T['handle'] : T;
type ExpectedFunction = HandlerFunction<IFunctionHandler$Inflight>;
/** Entrypoint function that will be called when the cloud function is invoked. */
export type Handler = ((ctx: Lifts, ...args: Parameters<ExpectedFunction>) => ReturnType<ExpectedFunction>) & {};
export function inflight(handler: Handler): Handler { return handler; }
export default inflight;
/** Trait marker for classes that can be depended upon.
The presence of this interface indicates that an object has
an `IDependable` implementation.

This interface can be used to take an (ordering) dependency on a set of
constructs. An ordering dependency implies that the resources represented by
those constructs are deployed before the resources depending ON them are
deployed. */
export interface IDependable$Inflight {
}
/** Represents a construct. */
export interface IConstruct$Inflight extends IDependable$Inflight {
}
/** Represents the building block of the construct graph.
All constructs besides the root construct must be created within the scope of
another construct. */
export class Construct$Inflight implements IConstruct$Inflight {
}
/** Data that can be lifted into inflight. */
export interface ILiftable$Inflight {
}
/** A liftable object that needs to be registered on the host as part of the lifting process.
This is generally used so the host can set up permissions
to access the lifted object inflight. */
export interface IHostedLiftable$Inflight extends ILiftable$Inflight {
}
/** Abstract interface for `Resource`. */
export interface IResource$Inflight extends IConstruct$Inflight, IHostedLiftable$Inflight {
}
/** Shared behavior between all Wing SDK resources. */
export class Resource$Inflight extends Construct$Inflight implements IResource$Inflight {
}
/** A distributed atomic counter. */
export class Counter$Inflight extends Resource$Inflight {
  /** Decrement the counter, returning the previous value.
  @returns the previous value of the counter. */
  readonly dec: (amount?: (number) | undefined, key?: (string) | undefined) => Promise<number>;
  /** Increments the counter atomically by a certain amount and returns the previous value.
  @returns the previous value of the counter. */
  readonly inc: (amount?: (number) | undefined, key?: (string) | undefined) => Promise<number>;
  /** Get the current value of the counter.
  Using this API may introduce race conditions since the value can change between
  the time it is read and the time it is used in your code.
  @returns current value */
  readonly peek: (key?: (string) | undefined) => Promise<number>;
  /** Set a counter to a given value. */
  readonly set: (value: number, key?: (string) | undefined) => Promise<void>;
}
export interface DeleteOptions {
  readonly ConditionExpression?: (string) | undefined;
  readonly ExpressionAttributeNames?: (Readonly<Record<string, string>>) | undefined;
  readonly ExpressionAttributeValues?: (Readonly<Record<string, Readonly<any>>>) | undefined;
  readonly Key: Readonly<any>;
  readonly ReturnValues?: (string) | undefined;
}
export interface DeleteOutput {
  readonly Attributes?: (Readonly<any>) | undefined;
}
export interface GetOptions {
  readonly ConsistentRead?: (boolean) | undefined;
  readonly ExpressionAttributeNames?: (Readonly<Record<string, string>>) | undefined;
  readonly ExpressionAttributeValues?: (Readonly<Record<string, Readonly<any>>>) | undefined;
  readonly Key: Readonly<any>;
  readonly ProjectionExpression?: (string) | undefined;
}
export interface GetOutput {
  readonly Item?: (Readonly<any>) | undefined;
}
export interface PutOptions {
  readonly ConditionExpression?: (string) | undefined;
  readonly ExpressionAttributeNames?: (Readonly<Record<string, string>>) | undefined;
  readonly ExpressionAttributeValues?: (Readonly<Record<string, Readonly<any>>>) | undefined;
  readonly Item: Readonly<any>;
  readonly ReturnValues?: (string) | undefined;
}
export interface PutOutput {
  readonly Attributes?: (Readonly<any>) | undefined;
}
export interface QueryOptions {
  readonly ConsistentRead?: (boolean) | undefined;
  readonly ExclusiveStartKey?: (Readonly<any>) | undefined;
  readonly ExpressionAttributeNames?: (Readonly<Record<string, string>>) | undefined;
  readonly ExpressionAttributeValues?: (Readonly<Record<string, Readonly<any>>>) | undefined;
  readonly FilterExpression?: (string) | undefined;
  readonly IndexName?: (string) | undefined;
  readonly KeyConditionExpression: string;
  readonly Limit?: (number) | undefined;
  readonly ProjectionExpression?: (string) | undefined;
  readonly ReturnConsumedCapacity?: (string) | undefined;
  readonly ScanIndexForward?: (boolean) | undefined;
  readonly Select?: (string) | undefined;
}
export interface QueryOutput {
  readonly ConsumedCapacity?: (Readonly<any>) | undefined;
  readonly Count: number;
  readonly Items: (readonly (Readonly<any>)[]);
  readonly LastEvaluatedKey?: (Readonly<any>) | undefined;
  readonly ScannedCount: number;
}
export interface ScanOptions {
  readonly ConsistentRead?: (boolean) | undefined;
  readonly ExclusiveStartKey?: (Readonly<any>) | undefined;
  readonly ExpressionAttributeNames?: (Readonly<Record<string, string>>) | undefined;
  readonly ExpressionAttributeValues?: (Readonly<Record<string, Readonly<any>>>) | undefined;
  readonly FilterExpression?: (string) | undefined;
  readonly IndexName?: (string) | undefined;
  readonly Limit?: (number) | undefined;
  readonly ProjectionExpression?: (string) | undefined;
  readonly ReturnConsumedCapacity?: (string) | undefined;
  readonly Segment?: (number) | undefined;
  readonly Select?: (string) | undefined;
  readonly TotalSegments?: (number) | undefined;
}
export interface ScanOutput {
  readonly ConsumedCapacity?: (Readonly<any>) | undefined;
  readonly Count: number;
  readonly Items: (readonly (Readonly<any>)[]);
  readonly LastEvaluatedKey?: (Readonly<any>) | undefined;
  readonly ScannedCount: number;
}
export interface TransactWriteItemConditionCheck {
  readonly ConditionExpression?: (string) | undefined;
  readonly ExpressionAttributeNames?: (Readonly<Record<string, string>>) | undefined;
  readonly ExpressionAttributeValues?: (Readonly<Record<string, Readonly<any>>>) | undefined;
  readonly Key: Readonly<any>;
  readonly ReturnValuesOnConditionCheckFailure?: (boolean) | undefined;
}
export interface TransactWriteItemDelete {
  readonly ConditionExpression?: (string) | undefined;
  readonly ExpressionAttributeNames?: (Readonly<Record<string, string>>) | undefined;
  readonly ExpressionAttributeValues?: (Readonly<Record<string, Readonly<any>>>) | undefined;
  readonly Key: Readonly<any>;
  readonly ReturnValuesOnConditionCheckFailure?: (boolean) | undefined;
}
export interface TransactWriteItemPut {
  readonly ConditionExpression?: (string) | undefined;
  readonly ExpressionAttributeNames?: (Readonly<Record<string, string>>) | undefined;
  readonly ExpressionAttributeValues?: (Readonly<Record<string, Readonly<any>>>) | undefined;
  readonly Item: Readonly<any>;
  readonly ReturnValuesOnConditionCheckFailure?: (boolean) | undefined;
}
export interface TransactWriteItemUpdate {
  readonly ConditionExpression?: (string) | undefined;
  readonly ExpressionAttributeNames?: (Readonly<Record<string, string>>) | undefined;
  readonly ExpressionAttributeValues?: (Readonly<Record<string, Readonly<any>>>) | undefined;
  readonly Key: Readonly<any>;
  readonly ReturnValuesOnConditionCheckFailure?: (boolean) | undefined;
  readonly UpdateExpression?: (string) | undefined;
}
export interface TransactWriteItem {
  readonly ConditionCheck?: (TransactWriteItemConditionCheck) | undefined;
  readonly Delete?: (TransactWriteItemDelete) | undefined;
  readonly Put?: (TransactWriteItemPut) | undefined;
  readonly Update?: (TransactWriteItemUpdate) | undefined;
}
export interface TransactWriteOptions {
  readonly TransactItems: (readonly (TransactWriteItem)[]);
}
export interface TransactWriteOutput {
}
export interface UpdateOptions {
  readonly ConditionExpression?: (string) | undefined;
  readonly ExpressionAttributeNames?: (Readonly<Record<string, string>>) | undefined;
  readonly ExpressionAttributeValues?: (Readonly<Record<string, Readonly<any>>>) | undefined;
  readonly Key: Readonly<any>;
  readonly ReturnConsumedCapacity?: (string) | undefined;
  readonly ReturnValues?: (string) | undefined;
  readonly UpdateExpression: string;
}
export interface UpdateOutput {
  readonly ConditionExpression?: (string) | undefined;
  readonly ExpressionAttributeNames?: (Readonly<Record<string, string>>) | undefined;
  readonly ExpressionAttributeValues?: (Readonly<Record<string, Readonly<any>>>) | undefined;
  readonly Item: Readonly<any>;
  readonly ReturnValues?: (string) | undefined;
}
export interface IClient$Inflight {
  readonly delete: (options: DeleteOptions) => Promise<DeleteOutput>;
  readonly get: (options: GetOptions) => Promise<GetOutput>;
  readonly put: (options: PutOptions) => Promise<PutOutput>;
  readonly query: (options: QueryOptions) => Promise<QueryOutput>;
  readonly scan: (options?: (ScanOptions) | undefined) => Promise<ScanOutput>;
  readonly transactWrite: (options: TransactWriteOptions) => Promise<TransactWriteOutput>;
  readonly update: (options: UpdateOptions) => Promise<UpdateOutput>;
}
export interface Credentials {
  readonly accessKeyId: string;
  readonly secretAccessKey: string;
}
export interface ClientConfig {
  readonly credentials: Credentials;
  readonly endpoint: string;
  readonly region: string;
}
export interface Connection {
  readonly clientConfig?: (ClientConfig) | undefined;
  readonly tableName: string;
}
export interface ITable$Inflight extends IClient$Inflight, IResource$Inflight {
  readonly delete: (options: DeleteOptions) => Promise<DeleteOutput>;
  readonly get: (options: GetOptions) => Promise<GetOutput>;
  readonly put: (options: PutOptions) => Promise<PutOutput>;
  readonly query: (options: QueryOptions) => Promise<QueryOutput>;
  readonly readWriteConnection: () => Promise<Connection>;
  readonly scan: (options?: (ScanOptions) | undefined) => Promise<ScanOutput>;
  readonly transactWrite: (options: TransactWriteOptions) => Promise<TransactWriteOutput>;
  readonly update: (options: UpdateOptions) => Promise<UpdateOutput>;
}
export class Table$Inflight extends Resource$Inflight implements ITable$Inflight {
  readonly $inflight_init: () => Promise<Table$Inflight>;
  readonly delete: (options: DeleteOptions) => Promise<DeleteOutput>;
  readonly get: (options: GetOptions) => Promise<GetOutput>;
  readonly put: (options: PutOptions) => Promise<PutOutput>;
  readonly query: (options: QueryOptions) => Promise<QueryOutput>;
  readonly readWriteConnection: () => Promise<Connection>;
  readonly scan: (options?: (ScanOptions) | undefined) => Promise<ScanOutput>;
  readonly transactWrite: (options: TransactWriteOptions) => Promise<TransactWriteOutput>;
  readonly update: (options: UpdateOptions) => Promise<UpdateOutput>;
}
/** Code that runs at runtime and implements your application's behavior.
For example, handling API requests, processing queue messages, etc.
Inflight code can be executed on various compute platforms in the cloud,
such as function services (such as AWS Lambda or Azure Functions),
containers (such as ECS or Kubernetes), VMs or even physical servers.

This data represents the code together with the bindings to preflight data required to run. */
export interface IInflight$Inflight extends IHostedLiftable$Inflight {
}
/** A resource with an inflight "handle" method that can be used to create a `cloud.Function`. */
export interface IFunctionHandler$Inflight extends IInflight$Inflight {
  /** Entrypoint function that will be called when the cloud function is invoked. */
  readonly handle: (event?: (string) | undefined) => Promise<string | void>;
}