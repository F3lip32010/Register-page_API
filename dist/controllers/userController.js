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
exports.userLogin = exports.fetchUsers = exports.addUser = void 0;
const userModel_1 = require("../models/userModel");
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        if (!user.nome || !user.data_nascimento) {
            res.status(400).json({ message: 'Nome e data de nascimento são obrigatórios.' });
        }
        yield (0, userModel_1.createUser)(user);
        res.status(201).json({ message: 'Usuário cadastrado com sucesso! Edvaldo' });
    }
    catch (error) {
        res.status(401).json({ message: 'Erro ao cadastrar usuário.' });
    }
});
exports.addUser = addUser;
const fetchUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.query.name; // Parâmetro opcional
        const users = yield (0, userModel_1.getUsers)(name);
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários.' });
    }
});
exports.fetchUsers = fetchUsers;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        // Validação dos campos obrigatórios
        if (!user.nome || !user.email || !user.senha || !user.data_nascimento) {
            res.status(400).json({ message: 'Todos os campos são obrigatórios: nome, email, senha e data de nascimento.' });
            return; // Encerrar execução se os dados forem inválidos
        }
        // Inserir o usuário no banco
        yield (0, userModel_1.userLoginCor)(user);
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
    }
});
exports.userLogin = userLogin;
//# sourceMappingURL=userController.js.map