import IModuleNamesDTO from 'index';

export default function createModuleDTO(
  names: Pick<IModuleNamesDTO, 'upperModuleName'>,
): string {
  return `export default interface I${names.upperModuleName}DTO {
  name: string;
  description: string;
}
`;
}
