import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LanguageEntity } from '../../common/language.entity';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => LanguageEntity)
  name: LanguageEntity;

  @Column(() => LanguageEntity)
  description: LanguageEntity;

  @Column()
  bgImage: string;

  @Column()
  wifiName: string;

  @Column()
  wifiPassword: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;
}
