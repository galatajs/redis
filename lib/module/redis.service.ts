import { OnAppStarted, OnModuleInstalled } from "@istanbul/app";
import { RedisClientType, createClient, RedisClientOptions } from "redis";
import { RedisEnum } from "./redis.enum";

export class RedisService implements OnAppStarted, OnModuleInstalled {
  client!: RedisClientType<any, any, any>;
  private options!: RedisClientOptions;

  onModuleInstalled(params: {
    [RedisEnum.CLIENT_OPTIONS]: RedisClientOptions;
  }) {
    this.options = params[RedisEnum.CLIENT_OPTIONS];
  }

  async onAppStarted(): Promise<void> {
    this.client = createClient(this.options);
    await this.client.connect();
  }
}
