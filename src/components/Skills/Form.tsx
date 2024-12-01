"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, User, MessageSquare } from 'lucide-react';
import ShineBorder from '../ui/shine-border';

// Define types for form data and errors
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  // Typed state for form data
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  // Typed state for form errors
  const [errors, setErrors] = useState<FormErrors>({});

  // Typed state for submission status
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Validation function with explicit return type
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Typed change handler
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear specific error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prevErrors => {
        const { [name as keyof FormErrors]: removedError, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  // Typed submit handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise<void>((resolve) => setTimeout(resolve, 1500));
        
        // Successful submission logic
        alert('Message sent successfully!');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } catch (error) {
        // Error handling
        console.error('Submission error:', error);
        alert('Failed to send message. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div >
      <div className="w-full max-w-md bg-[#122136] shadow-2xl rounded-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-6 text-center">
            Message Me
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Have a question? We'd love to hear from you.
          </p>
          
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4 relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <User size={20} />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 bg-[#122136] ${
                  errors.name 
                    ? 'border-red-500 focus:ring-red-300' 
                    : 'border-gray-300 focus:ring-blue-300'
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            
            <div className="mb-4 relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Mail size={20} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 bg-[#122136] ${
                  errors.email 
                    ? 'border-red-500 focus:ring-red-300' 
                    : 'border-gray-300 focus:ring-blue-300'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            
            <div className="mb-6 relative">
              <div className="absolute left-3 top-4 text-gray-400">
                <MessageSquare size={20} />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 resize-none bg-[#122136] ${
                  errors.message 
                    ? 'border-red-500 focus:ring-red-300' 
                    : 'border-gray-300 focus:ring-blue-300'
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <ShineBorder
      className="btn btn-outline  text-orange-300 font-semibold w-full"
      color="orange"
    >
      <button
              type="submit"
              disabled={isSubmitting}
             
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
    </ShineBorder>
            
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;