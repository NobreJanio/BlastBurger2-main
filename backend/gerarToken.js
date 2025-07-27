import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Função para gerar o token JWT
function gerarToken(payload) {
  // Chave secreta do JWT (vem do .env)
  const secret = process.env.JWT_SECRET;

  // Configurações do token (expiração)
  const options = {
    expiresIn: '7d', // Token expira em 7 dias
  };

  // Gerar o token
  const token = jwt.sign(payload, secret, options);

  return token;
}

// Exemplo de payload (dados que você quer incluir no token)
const payload = {
  id: '19b74139-0298-457b-a55a-c931dae07c4d', // ID do usuário
  name: 'Janio', // Nome do usuário
};

// Gerar o token
const token = gerarToken(payload);

// Exibir o token gerado
console.log('Token gerado:', token);