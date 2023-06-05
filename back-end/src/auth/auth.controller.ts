import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { NewUserDto } from 'src/user/dto/newUser.dto';
import { UserDetails } from 'src/user/userDetails.interface';
import { ExistingUserDto } from 'src/user/dto/existingUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  register(@Body() user: NewUserDto): Promise<UserDetails | null> {
    return this.authService.register(user);
  }

  @Post('login')
  login(@Body() user: ExistingUserDto): Promise<{ token: string } | null> {
    return this.authService.login(user);
  }
}
