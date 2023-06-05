import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { NewUserDto } from 'src/user/dto/newUser.dto';
import { UserDetails } from 'src/user/userDetails.interface';
import { get } from 'http';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  register(@Body() user: NewUserDto): Promise<UserDetails | null> {
    // console.log(user);
    return this.authService.register(user);
  }
}
