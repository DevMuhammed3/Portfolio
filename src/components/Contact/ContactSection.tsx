'use client'

import { useState } from "react";
import { motion } from 'framer-motion'
import { Mail, MapPin, Briefcase } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("muhdid82@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0" />

      <div className="relative md:px-24 py-40 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 max-w-2xl"
        >
          <h2 className="text-5xl font-bold text-white leading-tight">
            <span className="text-purple-600">/</span>
            Contact
          </h2>
          <p className="mt-4 text-white/60">
            Let’s build something great together.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Get in touch
            </h3>

            <p className="text-white/60 leading-relaxed">
              I’m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="space-y-3 text-white/70">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-white/70 hover:text-white transition cursor-pointer"
              >
                <Mail size={18} className="text-purple-500" />
                muhdid82@gmail.com
                {copied && (
                  <span className="text-green-400 text-sm ml-2">
                    Copied ✓
                  </span>
                )}
              </button>

              <p className="flex items-center gap-2">
                <MapPin size={18} className="text-purple-500" />
                Egypt
              </p>

              <p className="flex items-center gap-2">
                <Briefcase size={18} className="text-purple-500" />
                Available for freelance & full-time
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            action="mailto:muhdid82@gmail.com"
            method="POST"
            encType="text/plain"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur rounded-2xl p-8 space-y-6 border border-white/10"
          >
            <input
              placeholder="Your name"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500"
            />

            <input
              placeholder="Email address"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500"
            />

            <textarea
              rows={5}
              placeholder="Your message"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-xl py-3 font-semibold text-white"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

