import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: {
    ru: string;
    kg: string;
    en: string;
  };

  @Column()
  description: {
    ru: string;
    kg: string;
    en: string;
  };

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
