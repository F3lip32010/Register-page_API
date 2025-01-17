import { Router } from "express";

import { authenticationController } from "../controllers/authenticationController";

export class AuthenticatorRoutes {
    router: Router;
    constructor() {
        this.router = Router();
        this.router.get('/',authenticationController.handler);

    }

}
// authenticatorRoutes = 