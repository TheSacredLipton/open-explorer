
windowsでコマンドプロンプト開いたりエクスプローラー開いたりBlender開いたりするやつ

## Start

```
deno run --watch --allow-run --allow-env --unstable app.ts
```

## test

```
deno test --allow-run --allow-env --unstable
```

## example

```
import { openBlender, openExplorer, openTerminal } from "https://pax.deno.dev/TheSacredLipton/open-explorer";
import { join } from "https://deno.land/std/path/mod.ts";
import os from "https://deno.land/x/dos@v0.11.0/mod.ts";

const homeDir = os.homeDir();
if (homeDir) {
  openExplorer(join(homeDir, "Documents"));
  openBlender(join( homeDir, "Documents", "o.blend"));
}
```