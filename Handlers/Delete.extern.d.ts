export default interface extern {
  Delete: (deleteFromDb: (arg0: Readonly<any>) => Promise<void>, taskId: Readonly<any>) => Promise<string>,
}
