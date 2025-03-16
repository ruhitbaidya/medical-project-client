"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormInputs = {
  patientName: string;
  phoneNumber: string;
  doctor: string;
  bookingDate: string;
  symptoms: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    alert('Booking successful!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Doctor Serial Booking
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Patient Name */}
          <div>
            <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
              Patient Name
            </label>
            <input
              id="patientName"
              type="text"
              {...register('patientName', { required: 'Patient name is required' })}
              placeholder="Enter patient name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.patientName && (
              <p className="text-red-500 text-sm mt-1">{errors.patientName.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="text"
              {...register('phoneNumber', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Phone number must be 10 digits',
                },
              })}
              placeholder="Enter phone number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>

          {/* Doctor Selection */}
          <div>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">
              Select Doctor
            </label>
            <select
              id="doctor"
              {...register('doctor', { required: 'Please select a doctor' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
              <option value="Dr. Lee">Dr. Lee</option>
            </select>
            {errors.doctor && (
              <p className="text-red-500 text-sm mt-1">{errors.doctor.message}</p>
            )}
          </div>

          {/* Booking Date */}
          <div>
            <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700">
              Booking Date
            </label>
            <input
              id="bookingDate"
              type="date"
              {...register('bookingDate', { required: 'Booking date is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.bookingDate && (
              <p className="text-red-500 text-sm mt-1">{errors.bookingDate.message}</p>
            )}
          </div>

          {/* Symptoms */}
          <div>
            <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">
              Symptoms
            </label>
            <textarea
              id="symptoms"
              {...register('symptoms', { required: 'Symptoms description is required' })}
              placeholder="Describe your symptoms"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.symptoms && (
              <p className="text-red-500 text-sm mt-1">{errors.symptoms.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Book Serial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;