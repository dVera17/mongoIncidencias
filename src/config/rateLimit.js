import rateLimit from "express-rate-limit";

export const limiterLogin = () => {
    return rateLimit({
        windowMs: 1 * 60 * 1000,
        max: 5,
        standardHeaders: true,
        legacyHeaders: false,
        message: (req, res) => { res.status(429).send({ status: 429, message: "Limite alcanzado" }) }
    });
}

export const limiterGet = () => {
    return rateLimit({
        windowMs: 1 * 60 * 1000,
        max: 50,
        standardHeaders: true,
        legacyHeaders: false,
        message: (req, res) => { res.status(429).send({ status: 429, message: "Limite alcanzado" }) }
    });
}

