"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { CategoryType, JobType, SalaryRange, Timezone } from '@prisma/client';
import axios from 'axios';

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

type JobFormData = z.infer<typeof jobSchema>;

const JobPostModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors } } = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: JobFormData) => {
    try {
      await axios.post('/api/jobs', data);
      toast('Job Successfully Created');
      router.push('/');
    } catch (error: any) {
      console.log("error", error);
      toast(error.message);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
        {step === 1 && (
          <div>
            <button onClick={() => setStep(2)} className="bg-blue-500 text-white px-4 py-2 rounded">
              Custom Option
            </button>
          </div>
        )}
        {step === 2 && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input {...register('title')} placeholder="Job Title" className="w-full p-2 border rounded" />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
            
            <select {...register('category')} className="w-full p-2 border rounded">
              <option value="">Select Category</option>
              {Object.values(CategoryType).map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            {errors.category && <p className="text-red-500">{errors.category.message}</p>}
            
            <select {...register('timezone')} className="w-full p-2 border rounded">
              <option value="">Select Timezone</option>
              {Object.values(Timezone).map((timezone) => (
                <option key={timezone} value={timezone}>{timezone}</option>
              ))}
            </select>
            {errors.timezone && <p className="text-red-500">{errors.timezone.message}</p>}
            
            <select {...register('salary')} className="w-full p-2 border rounded">
              <option value="">Select Salary Range</option>
              {Object.values(SalaryRange).map((salary) => (
                <option key={salary} value={salary}>{salary}</option>
              ))}
            </select>
            {errors.salary && <p className="text-red-500">{errors.salary.message}</p>}
            
            <select {...register('type')} className="w-full p-2 border rounded">
              <option value="">Select Type</option>
              {Object.values(JobType).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.type && <p className="text-red-500">{errors.type.message}</p>}
            
            <textarea {...register('description')} placeholder="Job Description" className="w-full p-2 border rounded" />
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            
            <input {...register('companyName')} placeholder="Company Name" className="w-full p-2 border rounded" />
            {errors.companyName && <p className="text-red-500">{errors.companyName.message}</p>}
            
            <input {...register('companyEmail')} placeholder="Company Email" className="w-full p-2 border rounded" />
            {errors.companyEmail && <p className="text-red-500">{errors.companyEmail.message}</p>}
            
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
              Submit Job Post
            </button>
          </form>
        )}
        <button onClick={onClose} className="mt-4 text-gray-500">Close</button>
      </div>
    </div>
  );
}


export default JobPostModal;