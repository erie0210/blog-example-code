import express from 'express'

export function wrapAsync(fn: (req: express.Request, res: express.Response, next: express.NextFunction) => any) {
  return function (req: express.Request, res: express.Response, next: express.NextFunction) {
    fn(req, res, next).catch(next)
  }
}