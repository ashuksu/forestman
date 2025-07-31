import {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import clsx from 'clsx';

const STORAGE_KEY = 'contact_form';

type FormData = {
    name: string;
    email: string;
    message: string;
};

const initialData: FormData = {
    name: '',
    email: '',
    message: '',
};

export default function FeedbackForm() {
    const {t} = useTranslation();
    const [form, setForm] = useState<FormData>(initialData);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [submitted, setSubmitted] = useState(false);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const isInitialMount = useRef(true);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                setForm(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse saved form data:", e);
                localStorage.removeItem(STORAGE_KEY);
            }
        }
    }, []);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    }, [form]);

    const validate = () => {
        const newErrors: Partial<FormData> = {};
        if (!form.name.trim()) newErrors.name = t('form.errors.required');
        if (!form.email.trim()) {
            newErrors.email = t('form.errors.required');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = t('form.errors.invalidEmail');
        }
        if (!form.message.trim()) newErrors.message = t('form.errors.required');
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) {
            messageRef.current?.focus();
            return;
        }

        console.log('Sending...', form);
        setSubmitted(true);
        localStorage.removeItem(STORAGE_KEY);
        setForm(initialData);
    };

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-4 bg-white p-4 rounded-lg shadow-md">
            <div>
                <label htmlFor="name" className="block font-medium mb-1">{t('form.name')}</label>
                <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className={clsx("w-full p-2 border rounded", {
                        'border-red-500': errors.name,
                        'border-gray-300': !errors.name
                    })}
                    maxLength={100}
                    required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="email" className="block font-medium mb-1">{t('form.email')}</label>
                <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    className={clsx("w-full p-2 border rounded", {
                        'border-red-500': errors.email,
                        'border-gray-300': !errors.email
                    })}
                    required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="message" className="block font-medium mb-1">{t('form.message')}</label>
                <textarea
                    id="message"
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    className={clsx("w-full p-2 border rounded resize-none", {
                        'border-red-500': errors.message,
                        'border-gray-300': !errors.message
                    })}
                    rows={5}
                    ref={messageRef}
                    required
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                {t('form.submit')}
            </button>

            {submitted && (
                <p className="text-green-600 mt-2">{t('form.success')}</p>
            )}
        </form>
    );
}
