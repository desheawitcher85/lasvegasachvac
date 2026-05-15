"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const baseSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  problem: z.string().max(500).optional(),
  tcpaConsent: z.boolean().refine((v) => v === true, "Consent is required to submit"),
  source: z.string().optional(),
});

const fullSchema = baseSchema.extend({
  neighborhood: z.string().optional(),
  urgency: z.string().optional(),
});

type BaseFormData = z.infer<typeof baseSchema>;
type FullFormData = z.infer<typeof fullSchema>;

interface QuoteFormProps {
  source?: string;
  mode?: "mini" | "full";
}

export default function QuoteForm({ source = "unknown", mode = "mini" }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const schema = mode === "full" ? fullSchema : baseSchema;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FullFormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FullFormData) {
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us directly.");
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <p className="text-green-700 font-semibold text-lg mb-1">Got it. We&apos;ll call you shortly.</p>
        <p className="text-gray-600 text-sm">Usually within 15 minutes during business hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
      <input type="hidden" {...register("source")} value={source} />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="John Smith"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500"
          {...register("name")}
        />
        {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number <span className="text-red-600">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(702) 555-0000"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500"
          {...register("phone")}
        />
        {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">
          What&apos;s the Problem?
        </label>
        <textarea
          id="problem"
          rows={2}
          placeholder="AC not cooling, system making noise, need a new unit..."
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 resize-none"
          {...register("problem")}
        />
      </div>

      {mode === "full" && (
        <>
          <div>
            <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-1">
              Your Neighborhood
            </label>
            <select
              id="neighborhood"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 bg-white"
              {...register("neighborhood")}
            >
              <option value="">Select area...</option>
              <option value="Las Vegas">Las Vegas</option>
              <option value="Summerlin">Summerlin</option>
              <option value="Henderson">Henderson</option>
              <option value="North Las Vegas">North Las Vegas</option>
              <option value="Spring Valley">Spring Valley</option>
              <option value="Enterprise">Enterprise</option>
              <option value="Paradise">Paradise</option>
              <option value="Boulder City">Boulder City</option>
              <option value="Anthem">Anthem</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
              How Urgent?
            </label>
            <select
              id="urgency"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 bg-white"
              {...register("urgency")}
            >
              <option value="">Select urgency...</option>
              <option value="emergency">Emergency (need help now)</option>
              <option value="today">Today</option>
              <option value="this-week">This week</option>
              <option value="planning">Just planning ahead</option>
            </select>
          </div>
        </>
      )}

      <div className="flex items-start gap-2">
        <input
          id="tcpa"
          type="checkbox"
          className="mt-0.5 w-4 h-4 border-gray-300 rounded text-red-600 flex-shrink-0"
          {...register("tcpaConsent")}
        />
        <label htmlFor="tcpa" className="text-xs text-gray-500 leading-relaxed">
          By clicking &quot;Get a Free Quote&quot;, I agree to receive calls, texts, and emails from {" "}
          Vegas AC HVAC at the phone number provided. Consent not required for service. Standard message/data rates may apply. Reply STOP to opt out.
        </label>
      </div>
      {errors.tcpaConsent && <p className="text-red-600 text-xs">{errors.tcpaConsent.message}</p>}

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 text-white font-semibold py-3 px-6 rounded hover:bg-red-700 transition-colors disabled:opacity-60 text-base"
      >
        {isSubmitting ? "Sending..." : "Get a Free Quote"}
      </button>
    </form>
  );
}
