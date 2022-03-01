import express, {NextFunction, Request, Response, Router} from "express";

const app = express();
const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const info = {
            foo: "bar"
        };
        res.json(info);
    } catch (error) {
        console.error(error);
        next(error);
    }
});
app.use("/", router);
app.listen(80, () => {
    console.log("Listening...");
});