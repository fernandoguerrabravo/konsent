import { ReactNode } from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface BadgeProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

export interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export interface DemoFormData {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  industria: string;
}
