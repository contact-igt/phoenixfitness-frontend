'use client';

import React, { useState, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSearchParams } from 'next/navigation';
import { BRANCHES } from '@/app/data/constants';
import useUTMSource from '@/app/hooks/useUTMSource';
import styles from './styles.module.css';

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    phone: z.string().regex(/^[0-9]{10}$/, { message: "Phone number must be 10 digits." }),
    branch: z.string().min(1, { message: "Please select a branch." }),
});

type FormData = z.infer<typeof formSchema>;

interface LeadFormProps {
    title?: string;
    showTitle?: boolean;
}

function LeadFormInner({ title = "Get your chance to start your free trial", showTitle = true }: LeadFormProps) {
    useUTMSource();

    const searchParams = useSearchParams();
    const plan = searchParams.get('plan');
    const [isLoading, setIsLoading] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            setIsLoading(true);
            setSubmitError(null);

            const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            const clientKey = process.env.NEXT_PUBLIC_PHOENIX_CLIENT_KEY;

            if (!apiBaseUrl || !clientKey) {
                throw new Error("Phoenix Fitness API configuration is missing.");
            }

            const ipResponse = await fetch("https://api.ipify.org?format=json");
            if (!ipResponse.ok) {
                throw new Error("Unable to determine the visitor IP address.");
            }

            const ipData: { ip?: string } = await ipResponse.json();
            if (!ipData.ip) {
                throw new Error("The visitor IP address was not returned.");
            }

            const payload = {
                name: data.name.trim(),
                mobile_number: `+91 ${data.phone}`,
                branch: data.branch,
                utm_source: localStorage.getItem("utm_source") || "website",
                ip_address: ipData.ip,
            };

            const response = await fetch(`${apiBaseUrl}/phoenix-fitness/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Client-Key": clientKey,
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                let message = "Registration failed. Please try again.";

                try {
                    const errorBody = await response.json();
                    message = errorBody.message || errorBody.error || message;
                } catch {
                    // Keep the fallback message when the API does not return JSON.
                }

                throw new Error(message);
            }

            window.location.assign("/thank-you");
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitError(
                error instanceof Error
                    ? error.message
                    : "There was an error submitting your form. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        await handleSubmit(onSubmit)(e);
    };

    return (
        <div className={styles.formCard}>
            {showTitle && <h3 className={styles.formHeading}>{title}</h3>}
            {plan && (
                <div className={styles.planBadge}>
                    PLAN: <span className={styles.planName}>{plan.replace('-', ' ')}</span>
                </div>
            )}

            <form className={styles.form} onSubmit={handleFormSubmit} noValidate>
                <div className={styles.inputGroup}>
                    <input
                        {...register("name")}
                        type="text"
                        placeholder="NAME"
                        className={styles.input}
                        disabled={isLoading}
                    />
                    {errors.name && (
                        <p className={styles.errorText}>{errors.name.message}</p>
                    )}
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                        <input
                            {...register("phone")}
                            type="tel"
                            placeholder="PHONE"
                            className={styles.input}
                            disabled={isLoading}
                        />
                        {errors.phone && (
                            <p className={styles.errorText}>{errors.phone.message}</p>
                        )}
                    </div>

                    <div className={styles.inputGroup}>
                        <select
                            {...register("branch")}
                            className={styles.select}
                            disabled={isLoading}
                        >
                            <option value="">SELECT BRANCH</option>
                            {BRANCHES.map((branch) => (
                                <option key={branch.id} value={branch.name}>
                                    {branch.name.toUpperCase()}
                                </option>
                            ))}
                        </select>
                        {errors.branch && (
                            <p className={styles.errorText}>{errors.branch.message}</p>
                        )}
                    </div>
                </div>

                <button
                    className={styles.submitButton}
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? 'SUBMITTING...' : 'CLAIM FREE TRIAL'}
                </button>

                {submitError && (
                    <p className={styles.errorText} role="alert">
                        {submitError}
                    </p>
                )}
            </form>
        </div>
    );
}

export default function LeadForm(props: LeadFormProps) {
    return (
        <Suspense fallback={null}>
            <LeadFormInner {...props} />
        </Suspense>
    );
}
