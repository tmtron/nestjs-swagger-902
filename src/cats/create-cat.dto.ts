import { RoleEnum } from './role-enum';

export enum RoleEnumLocal {
  AdminL = 'AdminL',
  ModeratorL = 'ModeratorL',
  UserL = 'UserL',
}

export class CreateCatDto {
  readonly name: string;

  readonly age: number;

  readonly breed: string;

  /**
   * using an enum array causes this exception when we use webpack - but works when we use nest-cli:
   *
   *   Error: A circular dependency has been detected (property key: "roles").
   *   Please, make sure that each side of a bidirectional relationships are using lazy resolvers ("type: () => ClassType").
   *
   * see: https://github.com/nestjs/swagger/issues/902
   */
  readonly roles: RoleEnum[];
  readonly roleLocal?: RoleEnumLocal;

  readonly roleWithDefault: RoleEnum = RoleEnum.Moderator;
}
