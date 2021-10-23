export type ChangeHandler = (value: string) => void;

export interface ControlProps {
    name: string;
    value: string;
    label: string;
    onChange: ChangeHandler;
    required: boolean;
}

export interface InputControlProps extends ControlProps {
    type: string;
    maxLength?: string;
    minLength?: string;
    max?: string;
    min?: string;
    pattern?: string;
}

export interface SelectControlOption {
    label: string;
    value: string;
}

export interface SelectControlProps extends ControlProps {
    options: SelectControlOption[];
}