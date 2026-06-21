import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("dedupes conflicting tailwind classes (last wins)", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
  });

  it("drops falsy values and keeps the rest", () => {
    expect(cn("text-brand", false && "hidden", "font-bold")).toBe(
      "text-brand font-bold",
    );
  });
});
