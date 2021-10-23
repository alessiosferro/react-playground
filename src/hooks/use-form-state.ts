import { useMemo, useState } from "react"
import { getTitleCasedText } from "../common/utilities";

type FormHandlers<T extends object = {}> = {
    [K in keyof T & string as `handle${Capitalize<K>}Change`]: (value: T[K]) => void;
}

const useFormState = <T extends object = {}>(initialState: T) => {
    const [form, setForm] = useState(initialState);

    const handlers = useMemo(() => {
        return Object.keys(initialState).reduce((config, key) => ({
            ...config,
            [`handle${getTitleCasedText(key)}Change`]: (v: string) => setForm(prev => ({...prev, [key]: v}))
        }), {} as FormHandlers<T>);
    }, [initialState]);

    return {
        form,
        setForm,
        ...handlers
    };
}

export default useFormState;
