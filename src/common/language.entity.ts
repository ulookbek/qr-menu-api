import { Column } from 'typeorm';

export class LanguageEntity {
  @Column()
  ru: string;

  @Column()
  en: string;

  @Column()
  kg: string;
}
