import { Column, Entity } from 'typeorm';
import { CommonEntity } from 'utils/entity'

@Entity('paciente')
export class Paciente extends CommonEntity {
  @Column()
  public primerNombre:string;

  @Column()
  public segundoNombre:string;
}
