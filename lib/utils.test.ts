import { describe, expect, it } from "vitest"
import { cn } from "./utils"

describe("cn", () => {
  it("merges standard class strings", () => {
    expect(cn("foo", "bar")).toBe("foo bar")
  })

  it("resolves duplicate Tailwind classes to the last occurrence", () => {
    expect(cn("px-2", "px-4")).toBe("px-4")
  })
})

