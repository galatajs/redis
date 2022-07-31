import { createClient } from "redis";

export const createRedisApp = () => {
  createClient();
};

