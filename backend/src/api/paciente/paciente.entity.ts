import { Account } from 'api/account/account.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { CommonEntity } from 'utils/entity'

@Entity('paciente')
export class Paciente extends CommonEntity {
  @Column()
  public primerNombre:string;

  @Column()
  public segundoNombre:string;

  @ManyToOne(type => Account, account => account.pacientes, { nullable: false })
  public account: Account;
}
