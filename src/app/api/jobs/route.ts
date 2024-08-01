import { NextApiRequest, NextApiResponse } from "next";
import { CategoryType, JobType, PrismaClient, SalaryRange, Timezone } from "@prisma/client";
import {z} from  'zod';

const prisma =  new PrismaClient();

const jobSchema = z.object({
    title: z.string().min(1, 'Please provide title'),
    category: z.nativeEnum(CategoryType),
    timezone: z.nativeEnum(Timezone),
    salary: z.nativeEnum(SalaryRange),
    type: z.nativeEnum(JobType),
    description: z.string().min(1, 'Description is required'),
    companyName: z.string().min(1, 'Company name is required'),
    companyEmail: z.string().email('Invalid email'),
})

