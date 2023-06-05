import { Injectable } from '@nestjs/common';
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
    const { password, ...userData } = user;
    //check user exiting
    const existingUser = await this.userService.findByEmail(
      userData.primaryEmail,
    );
    if (existingUser) return 'Email taken!';

    //hash password
    const hashedPassword = await this.hashPassword(password);

    const newUser = await this.userService.create({
      ...userData,
      password: hashedPassword,
    });

    return this.userService.getUserDetails(newUser);
  }
}
