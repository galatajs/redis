import { OnAppFinished, OnModuleInstalled } from "@galatajs/app";
import { RedisClientType, createClient, RedisClientOptions } from "redis";
import { RedisEnum } from "./redis.enum";

export class RedisService implements OnAppFinished, OnModuleInstalled {
  client!: RedisClientType<any, any, any>;
  connected: boolean = false;

  onModuleInstalled = async (params: {
    [RedisEnum.CLIENT_OPTIONS]: RedisClientOptions;
  }): Promise<void> => {
    this.client = createClient(params[RedisEnum.CLIENT_OPTIONS]);
    this.client.on("error", (err) => {
      throw new Error(err);
    });
    this.client.on("connect", () => {
      this.connected = true;
    });
    await this.client.connect();
  };

  onAppFinished = (): void => {
    this.client.quit();
  };
}
