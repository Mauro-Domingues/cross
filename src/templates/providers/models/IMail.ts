export class CreateIMail {
  public execute(): string {
    return `import { ISendMailDTO } from '../dtos/ISendMailDTO';

export interface IMailProviderDTO {
  sendMail(data: ISendMailDTO): Promise<void>;
}
`;
  }
}
