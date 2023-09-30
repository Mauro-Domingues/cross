export class CreateIListDTO {
  public execute(): string {
    return `export interface IListDTO<T> {
  code: number;
  message_code: messageCode;
  message: string;
  pagination: {
    total: number;
    page: number;
    perPage: number;
    lastPage: number;
  };
  data: Array<T>;
}
`;
  }
}
