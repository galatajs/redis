import { Module } from "@istanbul/app";
import { RedisClientOptions } from "redis";
export interface RedisModuleOptions {
  global?: boolean;
  name?: string;
}

export type RedisModuleCreator = (
  options: RedisClientOptions,
  moduleOptions?: RedisModuleOptions
) => Module;
