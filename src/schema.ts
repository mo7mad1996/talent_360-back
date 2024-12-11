import { buildSchema } from "graphql";

export const schema = buildSchema(`


  input UserInput {
    nationalID: String
    nationalIDExpiringDate: String
    title: String
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
    arFirstName: String
    arFatherName: String
    argrandFatherName: String
    arFamilyName: String
    DOB: String
    gender: String
    nationality: String
    additionalNationality: String
    passportNo: String
    passportIssueDate: String
    passportExpiryDate: String
    maritalStatus: String
    dependencies: Int
  }



  type User {
    nationalID: String
    nationalIDExpiringDate: String
    title: String
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
    arFirstName: String
    arFatherName: String
    argrandFatherName: String
    arFamilyName: String
    DOB: String
    gender: String
    nationality: String
    additionalNationality: String
    passportNo: String
    passportIssueDate: String
    passportExpiryDate: String
    maritalStatus: String
    dependencies: Int
  }

  
  type LocalizedName {
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
  }

  type NationalId {
    idNumber: String
    expiryDate: String
  }

  type Nationality {
    countryId: Int
    name: String
  }

  type MaritalStatus {
    id: Int
    name: String
  }


  input NationalIdInput {
    idNumber: String
    expiryDate: String
  }

  input NationalityInput {
    countryId: Int
    name: String
  }

  input MaritalStatusInput {
    id: Int
    name: String
  }


  type Mutation {
    updateUser(
      id: Int!,
      user: UserInput!
    ): User
  }


  type Query {
    user(id: Int!): User
  }
`);
