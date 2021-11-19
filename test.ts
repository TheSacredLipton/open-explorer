import { openExplorer, openTerminal } from "./mod.ts";
import os from "https://deno.land/x/dos@v0.11.0/mod.ts";
import { dirname, fromFileUrl, join } from "https://deno.land/std/path/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

const homeDir = os.homeDir();

Deno.test("openExplorer", async () => {
  if (homeDir) {
    await openExplorer(join(homeDir, "Documents"));
  }
});

Deno.test("openTerminal", async () => {
  if (homeDir) {
    await openTerminal(join(homeDir, "Documents"));
  }
});
