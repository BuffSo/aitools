import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// jsdom 에는 IntersectionObserver 가 없어 motion 의 whileInView 가 동작하지 않으므로
// 즉시 "교차됨" 으로 콜백을 호출하는 mock 을 주입한다.
class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds = [];
  constructor(private cb: IntersectionObserverCallback) {}
  observe(target: Element) {
    this.cb(
      [{ isIntersecting: true, target } as IntersectionObserverEntry],
      this,
    );
  }
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
