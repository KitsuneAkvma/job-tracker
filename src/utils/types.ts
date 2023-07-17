export interface IRegisterData {
  Username: String;
  Email: String;
  Password: String;
  ConfPassword: String;
  FirstName: String;
  LastName: String;
}

export interface ILoginData {
  Username: String;
  Password: String;
}

export interface IJobData {
  _ID: number;
  Company: string;
  JobTitle: string;
  WhereFound: string;
  JobLocation: string;
  ApplicationDate: Date;
  ApplicationStatus: string;
  CoverLetter: string;
  JobOfferLink: string;
  Owner: number;
  Created: Date;
  Updated: Date;
}

export interface IUserData {
  _ID: number;
  Username: string;
  Email: string;
  Password: string;
  FirstName: string;
  LastName: string;
  Token: string;
  Verified: boolean;
  VerificationToken: string;
  Created: Date;
  Updated: Date;
}
