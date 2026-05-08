/**
 * Centralized contact information
 * Update this file to change contact details across the entire portfolio
 */

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  timezone: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export interface OfficeHours {
  weekday: string;
  saturday: string;
  sunday: string;
}

export const CONTACT_INFO: ContactInfo = {
  email: 'mdfarhadreja53@gmail.com',
  phone: '+8801782736805',
  whatsapp: '+8801782736805',
  location: 'Dhaka, Bangladesh',
  timezone: 'IST (UTC+5:30)',
  github: 'https://github.com/farhadreja800',
  linkedin: 'https://linkedin.com/in/farhadreja',
  twitter: '@farhadreja',
}

export const OFFICE_HOURS: OfficeHours = {
  weekday: 'Monday - Friday: 9:00 AM - 6:00 PM (IST)',
  saturday: 'Saturday: 10:00 AM - 2:00 PM (IST)',
  sunday: 'Sunday: Closed',
}
