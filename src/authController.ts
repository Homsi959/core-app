export class authController {
    async registration(req: any, res: any) {
        try {
            res.json('asфывыф')

        } catch (err) {
            res.status(400).json({ message: 'Registration error' })
        }
    }
    async login() {
        try {

        } catch (err) {

        }
    }
    async users() {
        try {

        } catch (err) {

        }
    }
}