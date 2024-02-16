import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LanguageEntity } from '../../common/language.entity';

@Entity('menus')
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => LanguageEntity)
  name: LanguageEntity;

  @Column(() => LanguageEntity)
  description: LanguageEntity;

  @Column()
  bgImage: string;
}
