import { Request, Response } from "express";

/**
 * Welcome endpoint
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Welcome to the API",
        success: true
    })
}

/**
 * Check status of the API
 * @route GET /status
 */
export const status = (req: Request, res: Response) => {
    return res.status(200).json({
        message: "API is up and running",
        success: true
    })
}