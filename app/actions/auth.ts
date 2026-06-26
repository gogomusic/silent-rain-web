"use server";

import type { ResponseStructure } from "@/types/typing";
import { request } from "./request";

export async function userControllerRegister(
  _prevState: ResponseStructure,
  formData: FormData,
): Promise<ResponseStructure> {
  return request("/user/register", {
    method: "POST",
    body: {
      username: formData.get("username"),
      nickname: formData.get("nickname"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
      captcha: formData.get("captcha"),
    },
  });
}

export async function userControllerLogin(
  _prevState: ResponseStructure,
  formData: FormData,
): Promise<ResponseStructure<{ token: string }>> {
  return request("/user/login", {
    method: "POST",
    body: {
      username: formData.get("username"),
      password: formData.get("password"),
    },
  });
}

export const userControllerGetCaptcha = async (
  email: string,
): Promise<ResponseStructure> => {
  const params = new URLSearchParams({ email });
  return request(`/user/captcha?${params}`);
};
