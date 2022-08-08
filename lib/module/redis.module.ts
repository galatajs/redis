import { createModule, Module } from "@istanbul/app";
import { RedisClientOptions } from "redis";
import { RedisModuleCreator, RedisModuleOptions } from "../types/redis.types";
import { RedisEnum } from "./redis.enum";
import { RedisService } from "./redis.service";

export const createRedisModule: RedisModuleCreator = (
  options: RedisClientOptions,
  moduleOptions: RedisModuleOptions = {}
): Module => {
  return createModule(moduleOptions.name || RedisEnum.DEFAULT_NAME, {
    global: moduleOptions.global || true,
    providers: [
      {
        name: RedisEnum.CLIENT_OPTIONS,
        value: options,
      },
      RedisService,
    ],
    exports: [RedisService],
  });
};
