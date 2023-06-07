import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDetails } from './userDetails.interface';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { updateUserDto } from './dto/updateUser.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  //   @UseGuards(JwtGuard) //for test protect route
  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDetails | null> {
    return this.userService.findById(id);
  }

  //get user with products
  @Get('with-products/:id')
  async getUserWithProducts(@Param('id') id: string) {
    const userWithProducts = await this.userService.getUserWithProducts(id);
    return userWithProducts;
  }

  //
  @Get('with-links/:id')
  getUserWithSectionsAndLinks(@Param('id') id: string) {
    return this.userService.getUserWithSectionsAndLinks(id);
  }

  //update
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: updateUserDto,
  ): Promise<UserDetails> {
    return this.userService.update(id, updateUserDto);
  }

  //delete
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<string> {
    return this.userService.delete(id);
  }
}
