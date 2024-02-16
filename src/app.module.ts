import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './restaurants/entities/restaurant.entity';
import { MenuModule } from './menu/menu.module';
import { Menu } from './menu/entities/menu.entity';

@Module({
  imports: [
    RestaurantsModule,
    MenuModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'qweqwe123123',
      database: 'qr-menu',
      entities: [Restaurant, Menu],
      synchronize: true,
      logging: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
