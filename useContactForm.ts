import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  businessName: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}