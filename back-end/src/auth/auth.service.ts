import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { NewUserDto } from 'src/user/dto/newUser.dto';
import { UserDetails } from 'src/user/userDetails.interface';
import { JwtService } from '@nestjs/jwt';
import { ExistingUserDto } from 'src/user/dto/existingUser.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

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

  async doesPasswordMatch(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  async validateUser(
    primaryEmail: string,
    password: string,
  ): Promise<UserDetails | null> {
    const user = await this.userService.findByEmail(primaryEmail);
    const doesUserExist = !!user; // trick to convert any return to boolean

    if (!doesUserExist) return null;

    const doesPasswordMatch = await this.doesPasswordMatch(
      password,
      user.password,
    );

    if (!doesPasswordMatch) return null;

    return this.userService.getUserDetails(user);
  }

  async login(
    existingUser: ExistingUserDto,
  ): Promise<{ token: string } | null> {
    const { primaryEmail, password } = existingUser;
    const user = await this.validateUser(primaryEmail, password);

    if (!user) return null;

    const jwt = await this.jwtService.signAsync({ user });
    return { token: jwt };
  }
}
