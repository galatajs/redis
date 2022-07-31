const test = require("node:test");
const assert = require("node:assert");
const { createApp, createModule } = require("@istanbul/app");
const { createRedisModule } = require("../dist");

test("Redis Module Testing", async (t) => {
  await t.test("Create a redis client and check connection", async () => {
    let res;
    class ServiceA {
      redisService;

      constructor(params) {
        this.redisService = params.redisService;
      }

      onAppStarted = () => {
        res = this.redisService.connected;
        this.redisService.onAppFinished();
        assert.equal(res, true);
      };
    }
    const mainModule = createModule("main", {
      imports: [createRedisModule({ url: "redis://localhost:6379" })],
      providers: [ServiceA],
    });
    const app = createApp(mainModule);
    await app.start();
  });
});
