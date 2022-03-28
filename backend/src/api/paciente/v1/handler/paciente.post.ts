import { Paciente } from 'api/paciente/paciente.entity';
import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';

interface PacientePostBody {
    primerNombre: string;
    segundoNombre: string;
}

export async function pacientePostHandler(req: Request, res: Response, next: NextFunction) {
    const body: PacientePostBody = req.body;

    const newPaciente = getRepository(Paciente).create({
        primerNombre: body.primerNombre,
        segundoNombre: body.segundoNombre,
    });
    const paciente = await getRepository(Paciente).save(newPaciente);

    res.status(201).json({ id: paciente.id });
}