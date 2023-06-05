import { UserType } from '../user.schema';

export class updateUserDto {
  fullName?: string;
  userName?: string;
  primaryEmail?: string;
  password?: string;
  bio?: string;
  primaryEmailEnabled?: boolean;
  primaryPhone?: string;
  primaryPhoneEnabled?: boolean;
  emails?: string[];
  phones?: string[];
  userType?: UserType;
}
