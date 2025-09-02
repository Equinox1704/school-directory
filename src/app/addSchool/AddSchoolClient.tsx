'use client';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  email_id: string;
  image: FileList;
};

export default function AddSchoolClient() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
    const onSubmit = async (data: FormData) => {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('address', data.address);
      formData.append('city', data.city);
      formData.append('state', data.state);
      formData.append('contact', data.contact);
      formData.append('email_id', data.email_id);
      if (data.image.length > 0) formData.append('image', data.image[0]);
  
      const response = await fetch('/api/schools', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        alert('School added successfully!');
      } else {
        alert('Failed to add school.');
      }
    };
  
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg space-y-6 bg-gray-800 rounded-lg shadow-lg p-8 text-white">
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Name"
            className="w-full border border-gray-700 rounded p-3 bg-gray-700 focus:outline-none focus:border-blue-500"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
  
          <input
            {...register('address', { required: 'Address is required' })}
            placeholder="Address"
            className="w-full border border-gray-700 rounded p-3 bg-gray-700 focus:outline-none focus:border-blue-500"
          />
          {errors.address && <p className="text-red-500">{errors.address.message}</p>}
  
          <input
            {...register('city', { required: 'City is required' })}
            placeholder="City"
            className="w-full border border-gray-700 rounded p-3 bg-gray-700 focus:outline-none focus:border-blue-500"
          />
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}
  
          <input
            {...register('state', { required: 'State is required' })}
            placeholder="State"
            className="w-full border border-gray-700 rounded p-3 bg-gray-700 focus:outline-none focus:border-blue-500"
          />
          {errors.state && <p className="text-red-500">{errors.state.message}</p>}
  
          <input
            {...register('contact', {
              required: 'Contact is required',
              pattern: { value: /^\d+$/, message: 'Invalid contact number' },
            })}
            placeholder="Contact Number"
            className="w-full border border-gray-700 rounded p-3 bg-gray-700 focus:outline-none focus:border-blue-500"
          />
          {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}
  
          <input
            {...register('email_id', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
            })}
            placeholder="Email"
            className="w-full border border-gray-700 rounded p-3 bg-gray-700 focus:outline-none focus:border-blue-500"
          />
          {errors.email_id && <p className="text-red-500">{errors.email_id.message}</p>}
  
          {/* <input
            type="file"
            {...register('image', { required: 'Image is required' })}
            className="w-full text-gray-300"
            accept="image/*"
          />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>} */}
  
          <label className="block w-full">
            <span className="sr-only">Choose school image</span>
            <input
              type="file"
              {...register('image', { required: 'Image is required' })}
              accept="image/*"
              className="hidden"
              id="file-upload"
            />
            <div className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-white text-center py-2 rounded shadow-md">
              Choose Image
            </div>    
        </label>  
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
  
  
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors rounded py-3 px-8 text-white font-semibold"
          >
            Add School
          </button>
        </form>
      </main>
    );
}
