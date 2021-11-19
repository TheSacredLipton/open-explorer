
windowsでコマンドプロンプト開いたりエクスプローラー開いたりBlender開いたりするやつ

## Start

```
deno run --watch --allow-run --allow-env --unstable app.ts
```

## example

```
import {openExplorer, openBlender, openTerminal} from "https://pax.deno.dev/TheSacredLipton/open-expolorer";
import os from "https://deno.land/x/dos@v0.11.0/mod.ts";

const homeDir = os.homeDir();
if (homeDir) {
  openExplorer(join(homeDir, "Documents"));
  openBlender(join( homeDir, "Documents", "o.blend"));
}
```