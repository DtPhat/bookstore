'use client'
import emailjs from '@emailjs/browser';
import config from "@/lib/config";

emailjs.init(config.env.emailjs.publicKey);

export default emailjs