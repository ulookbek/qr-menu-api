import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { Restaurant } from './entities/restaurant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([Restaurant]),
    MulterModule.register({
      dest: './media/restaurants',
    }),
  ],
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
})
export class RestaurantsModule {}
