import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
import { z } from 'zod';
import { CategoryType, JobType, SalaryRange, Timezone } from "@prisma/client";

const jobSchema = z.object({
  title: z.string().min(1, 'Please provide title'),
  category: z.nativeEnum(CategoryType),
  timezone: z.nativeEnum(Timezone),
  salary: z.nativeEnum(SalaryRange),
  type: z.nativeEnum(JobType),
  description: z.string().min(1, 'Description is required'),
  companyName: z.string().min(1, 'Company name is required'),
  companyEmail: z.string().email('Invalid email'),
});

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const body = await req.json();
      const data = jobSchema.parse(body);
      const job = await prisma.job.create({ data });
      return NextResponse.json(job, { status: 201 });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return NextResponse.json({ errors: error.errors }, { status: 400 });
      } else {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
      }
    }
  } else {
    return NextResponse.json({ error: `Method ${req.method} Not Allowed` }, { status: 405 });
  }
}
