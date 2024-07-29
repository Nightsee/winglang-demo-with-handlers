export default interface extern {
  Add: (count: number, addToDb: (arg0: Readonly<any>) => Promise<void>, data: Readonly<any>) => Promise<string>,
}
