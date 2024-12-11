let users = [
  {
    id: 1,
    nationalID: null,
    nationalIDExpiringDate: "2001-09-10T21:00:00.000Z",
    title: null,
    firstName: null,
    fatherName: null,
    grandfatherName: null,
    familyName: null,
    arFirstName: null,
    arFatherName: null,
    argrandFatherName: null,
    arFamilyName: null,
    DOB: "2001-09-10T21:00:00.000Z",
    gender: "male",
    nationality: "EGY",
    additionalNationality: null,
    passportNo: null,
    passportIssueDate: "2001-09-10T21:00:00.000Z",
    passportExpiryDate: "2001-09-10T21:00:00.000Z",
    maritalStatus: "single",
    dependencies: null,
  },
];

export const userResolver = {
  user: ({ id }: { id: number }) => users.find((d) => d.id == id),

  updateUser: (args: any) => {
    const user = users.find((d) => d.id == args.id);

    if (!user) {
      throw new Error("User not found");
    }
    const newDate = {
      ...user,
      ...args.user,
    };

    users = users.map((e) => (e.id == args.id ? newDate : e));

    return newDate;
  },
};
