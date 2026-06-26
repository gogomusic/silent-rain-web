import type { StatusCodes } from "http-status-codes";

/** 错误处理方案： 错误类型 */
export enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}

export enum CustomErrorCode {}

export type ErrorCode = StatusCodes | CustomErrorCode;

export interface ResponseStructure<T = unknown> {
  success: boolean;
  data?: T;
  errorCode?: ErrorCode;
  errorMessage?: string | string[];
  showType?: ErrorShowType;
}
