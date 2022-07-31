import { CorePluginCreator, ModuleRegisterer } from "@istanbul/app";
import { RedisClientOptions, RedisClientType } from "redis";

export interface RedisApp extends CorePluginCreator {
  client: RedisClientType;
}

export interface RedisOptions extends RedisClientOptions {}

export type RedisAppCreator = (options?: RedisOptions) => RedisApp;
export type RedisClientRegisterer = (clientNumber?: number) => ModuleRegisterer;
