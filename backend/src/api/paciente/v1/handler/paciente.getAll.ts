import { Paciente } from "api/paciente/paciente.entity";
import { NextFunction, Request, Response } from "express";
import { getConnection } from "typeorm";

interface PacienteGetAllQuery {
    offset: number;
    limit: number;
}

export async function pacienteGetAllHandler(req: Request, res: Response, next: NextFunction){
    const query: PacienteGetAllQuery = req.query;

    const pacienteList = await getConnection()
    .createQueryBuilder()
    .select('paciente')
    .from(Paciente, 'paciente')
    .orderBy('id', 'DESC')
    .skip(query.offset)
    .take(query.limit)
    .getMany();

    res.status(200).json(pacienteList);
}