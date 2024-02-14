import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LanguageEntity } from '../../common/language.entity';

@Entity('restaurants')
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => LanguageEntity)
  name: LanguageEntity;

  @Column(() => LanguageEntity)
  description: LanguageEntity;

  @Column({ default: '' })
  bgImage: string;

  @Column({ default: '' })
  wifiName: string;

  @Column({ default: '' })
  wifiPassword: string;

  @Column({ default: '' })
  address: string;

  @Column({ default: '' })
  phoneNumber: string;

  @Column({
    type: 'jsonb',
    array: false,
    default: () => "'[]'",
    nullable: false,
  })
  public menu: Array<{ name: string }>;
}
