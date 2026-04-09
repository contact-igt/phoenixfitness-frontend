'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSearchParams } from 'next/navigation';
import styles from './styles.module.css';

const BRANCHES = [
    { id: 'budegere', name: 'Budegere Cross' },
    { id: 'kannamangala', name: 'Kannamangala' },
    { id: 'nallurhalli', name: 'Nallurhalli' },
    { id: 'yello', name: 'Yello Living (ITPL)' },
    { id: 'hopefarm', name: 'Hope Farm' }
];

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

export default function LeadForm({ title = "Get your chance to start your free trial", showTitle = true }: LeadFormProps) {
    const searchParams = useSearchParams();
    const plan = searchParams.get('plan');
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            setIsLoading(true);
            const ipResponse = await fetch("https://api.ipify.org?format=json");
            const ipData = await ipResponse.json();

            const formData = {
                name: data.name,
                phone: `+91${data.phone}`,
                branch: data.branch,
                plan: plan || 'General Interest',
                ip_address: ipData.ip,
                utm_source: typeof window !== 'undefined' ? localStorage.getItem("utm_source") : null,
            };

            const params = new URLSearchParams();
            (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
                const value = formData[key as keyof typeof formData];
                params.append(key, value != null ? String(value) : "");
            });

            await handleGoogleSheetForm(params);

            if (typeof window !== 'undefined') {
                window.location.href = "/thank-you";
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting your form. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSheetForm = async (formData: URLSearchParams, retries = 3, delay = 1500): Promise<boolean> => {
        try {
            const res = await fetch(
                "https://script.google.com/macros/s/AKfycbyrghBZ8MIWxUcj2VUhH15lWl8x00zYLS9_Do7NvIV1ftZkag6jOjfa5a_E-F0NnG/exec",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: formData.toString(),
                }
            );

            const text = await res.text();
            console.log("Google Sheet Response:", text);

            if (res.ok) {
                return true;
            } else {
                throw new Error("Sheet responded with non-OK");
            }
        } catch (err) {
            console.error(`Google Sheet attempt failed. Retries left: ${retries}`, err);

            if (retries <= 1) {
                console.error("Google Sheet failed permanently!");
                return false;
            }

            await new Promise((resolve) => setTimeout(resolve, delay));
            return handleGoogleSheetForm(formData, retries - 1, delay);
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
                            {BRANCHES.map(b => (
                                <option key={b.id} value={b.name}>
                                    {b.name.toUpperCase()}
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
            </form>
        </div>
    );
}
