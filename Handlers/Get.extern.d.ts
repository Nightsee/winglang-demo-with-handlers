export default interface extern {
  Getter: (scanDb: () => Promise<string>) => Promise<string>,
}
