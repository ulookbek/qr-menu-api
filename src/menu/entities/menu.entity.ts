import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LanguageEntity } from '../../common/language.entity';

@Entity('menu')
export class Menus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => LanguageEntity)
  name: LanguageEntity;

  @Column(() => LanguageEntity)
  description: LanguageEntity;

  @Column()
  bgImage: string;
}
