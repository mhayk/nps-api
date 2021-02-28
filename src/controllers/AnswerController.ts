import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {

    // http://localhost:3333/answers/10?u=f92dced5-3a3c-4db2-ac2f-72f090f0958d
    /*
      Route params (is required)
      routes.get("/answers/:value")

      Query params (is not required, pagination, search)
      key=value
    */

    async execute(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        })

        if (!surveyUser) {
            return response.status(400).json({
                error: "Survey User does not exists!"
            })
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser)
    }
}

export { AnswerController }