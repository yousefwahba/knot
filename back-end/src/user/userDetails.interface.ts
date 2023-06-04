import { UserType } from './user.schema';

export interface UserDetails {
  id: string;
  fullName?: string;
  userName: string;
  primaryEmail: string;
  bio?: string;
  createdAt?: Date;
  primaryEmailEnabled?: boolean;
  primaryPhone?: string;
  primaryPhoneEnabled?: boolean;
  emails?: string[];
  phones?: string[];
  userType?: UserType;
}
