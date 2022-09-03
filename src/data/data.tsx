import { faker } from "@faker-js/faker"

export interface User {
    name: string,
    email: string,
    avatar: string
}

export interface MtData {
    name: string,
    elevation: number,
}


export const mt_peaks = [
    { name: "Mt.Fuji", elevation: 3330 },
    { name: "Mt.Takao", elevation: 1000 },
    { name: "Mt.SouthAlps", elevation: 1020 },
    { name: "Mt.Alps", elevation: 2300 },
]

export const BigList: User[] = [...Array(5000)].map((): User => ({
    name: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
}))
