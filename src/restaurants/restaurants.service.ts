import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { restaurantNotFound } from './constants';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}
  async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    return this.restaurantRepository.save(createRestaurantDto);
  }

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantRepository.find();
  }

  async findOne(id: number, lang?: string) {
    try {
      return await this.restaurantRepository.findOneOrFail({
        where: { id },
      });
    } catch (e) {
      throw new NotFoundException(restaurantNotFound[lang || 'en']);
    }
  }

  async update(
    id: number,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    const restaurant = await this.restaurantRepository.findOneBy({ id });
    if (!restaurant) {
      throw new NotFoundException(`Restaurant with ID "${id}" not found`);
    }

    // Слить существующие данные с новыми данными из DTO
    const updatedRestaurant = Object.assign(restaurant, updateRestaurantDto);
    await this.restaurantRepository.save(updatedRestaurant);

    return updatedRestaurant;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
