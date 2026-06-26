import type { ResponseStructure } from "@/types/typing";

const API_URL = process.env.NEXT_API_URL;

type FetchOptions = Omit<RequestInit, "body"> & {
  body?: Record<string, unknown>;
};

export async function request<T = unknown>(
  url: string,
  options: FetchOptions = {},
): Promise<ResponseStructure<T>> {
  const { body, headers, ...rest } = options;

  try {
    const res = await fetch(`${API_URL}${url}`, {
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      ...rest,
    });
    return res.json();
  } catch {
    return { success: false, errorMessage: "网络错误，请检查网络连接后重试" };
  }
}
