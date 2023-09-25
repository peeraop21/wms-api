import { MockQueryRunner } from "./mock-query-runner";

 export class MockDataSource {
    createQueryRunner() {
      return new MockQueryRunner();
    }
  }
