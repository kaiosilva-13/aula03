import { Injectable } from '@nestjs/common';

export type Papel = 'solicitante' | 'gestor' | 'auditor';

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  senhaHash: string;
  papel: Papel;
  ativo: boolean;
};

export type UsuarioAutenticado = Omit<Usuario, 'senhaHash'>;

@Injectable()
export class UsuariosService {
  private readonly usuarios: Usuario[] = [
    {
      id: 1,
      nome: 'Kaio',
      email: 'kaio@empresa.com',
      senhaHash: '$2b$12$gKTj8F0wOpHLNDVgH/WN5.VyuKi0W00i4NQOP7ae7xgBr6F3dH8HS',
      papel: 'gestor',
      ativo: true,
    },
    {
      id: 2,
      nome: 'Vitor',
      email: 'vitor@empresa.com',
      senhaHash: '$2b$12$8h9u4ZDWrYv6JfbHSmiSyuomQtIwETnOQpxWaXKhRvuxNfEn0Amc2',
      papel: 'auditor',
      ativo: true,
    },
    {
      id: 3,
      nome: 'Bruno',
      email: 'bruno@empresa.com',
      senhaHash: '$2b$12$gKTj8F0wOpHLNDVgH/WN5.VyuKi0W00i4NQOP7ae7xgBr6F3dH8HS',
      papel: 'solicitante',
      ativo: true,
    },
  ];

  buscarPorEmail(email: string) {
    return this.usuarios.find((usuario) => usuario.email === email);
  }
}
