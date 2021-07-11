import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/UserRepositories';

interface IUserRequest {
  name: string,
  email: string,
  admin?: boolean
}

export class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UserRepositories);

    if (!email) {
      throw new Error("Email incorreto");
    }

    const usersAlreadyExiste = await usersRepository.findOne({
      email
    });

    if (usersAlreadyExiste) {
      throw new Error("user already exists");
    }

    const user = usersRepository.create({
      name,
      email,
      admin
    });

    await usersRepository.save(user);

    return user;

  }
}