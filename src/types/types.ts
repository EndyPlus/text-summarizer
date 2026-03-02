import { ReactNode } from "react";

// layout

export type PropsLayout = Readonly<{
  children: ReactNode;
}>;

// post data

export interface Post {
  id: number;
  originalText: string;
  summarizedText: string;
  createdAt: Date;
  authorId: number;
}

export interface PostsData {
  posts: Post[];
  count: number;
}

export interface ItemDataProps {
  itemData: Post;
}

// user data

export interface UserInfoData {
  name: string;
  username: string;
  pfp: string;
}

// register

export type RegisterActionFormData = Record<
  "firstName" | "lastName" | "username" | "password" | "confirmPassword",
  string
>;

export interface RegisterFormActionState {
  success: boolean;
  errors: null | InputError[];
  credentials: null | {
    username: string;
    password: string;
  };

  firstName?: string;
  lastName?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
}

// modals

export interface ModalProps {
  onClose: () => void;
  heading: string;
  isSuccess: boolean;
  children: ReactNode;
}

export type ModalWrapperProps = Pick<ModalProps, "onClose" | "children">;

export type DashboardNotifyProps = Omit<ModalProps, "heading" | "children"> & {
  message: string;
};

export type AuthErrorNotifyProps = Omit<
  ModalProps,
  "isSuccess" | "children"
> & {
  errors: null | (string | InputError)[];
};

// errors

export interface InputError {
  inputName: string | null;
  errorsList: string[];
}

export interface ErrorsData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;
}
