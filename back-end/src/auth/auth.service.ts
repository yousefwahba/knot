import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { NewUserDto } from 'src/user/dto/newUser.dto';
import { UserDetails } from 'src/user/userDetails.interface';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  async register(user: Readonly<NewUserDto>): Promise<UserDetails | any> {
    const { userName, primaryEmail, password } = user;

    const existingUser = await this.userService.findByEmail(primaryEmail);

    if (existingUser) return 'Email taken!';
    //   throw new HttpException(
    //     'An account with that email already exists!',
    //     HttpStatus.CONFLICT,
    //   );

    const hashedPassword = await this.hashPassword(password);

    const newUser = await this.userService.create(
      userName,
      primaryEmail,
      hashedPassword,
    );
    return this.userService.getUserDetails(newUser);
  }
}
