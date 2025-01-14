"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginCor = exports.getUsers = exports.createUser = void 0;
const database_1 = require("../config/database");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, data_nascimento, sexo, email, instagram, telefone } = user;
    const query = `
    INSERT INTO tb_alunos (nome, data_nascimento, sexo, email, instagram, telefone)
    VALUES ($1, $2, $3, $4, $5, $6)
  `;
    const values = [nome, data_nascimento, sexo, email, instagram, telefone];
    yield database_1.pool.query(query, values);
});
exports.createUser = createUser;
const getUsers = (name) => __awaiter(void 0, void 0, void 0, function* () {
    let query = 'SELECT * FROM tb_alunos';
    const values = [];
    if (name) {
        query += ' WHERE nome ILIKE $1';
        values.push(`%${name}%`);
    }
    const result = yield database_1.pool.query(query, values);
    return result.rows;
});
exports.getUsers = getUsers;
const userLoginCor = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, senha, data_nascimento } = user;
    const query = `
    INSERT INTO tb_usuarios (nome, email, password, data_nascimento)
    VALUES ($1, $2, $3, $4)
  `;
    const values = [nome, email, senha, data_nascimento];
    yield database_1.pool.query(query, values);
});
exports.userLoginCor = userLoginCor;
//# sourceMappingURL=userModel.js.map