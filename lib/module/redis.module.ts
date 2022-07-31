import { createModule, Module } from "@istanbul/app";
import { RedisClientOptions } from "redis";
import { RedisEnum } from "./redis.enum";
import { RedisService } from "./redis.service";

export const createRedisModule = (
  options: RedisClientOptions,
  name: string = RedisEnum.DEFAULT_NAME
): Module => {
  return createModule(name, {
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
