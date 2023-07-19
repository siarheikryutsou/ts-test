enum EnumRoles {
    ADMIN, GUEST, USER
}

const enum EnumSex {
    male, female
}

interface IUser {
    role: EnumRoles
    sex: EnumSex
}

const currentUser:IUser = {
    role: EnumRoles.ADMIN,
    sex: EnumSex.female
}