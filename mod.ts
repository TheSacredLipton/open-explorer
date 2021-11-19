import { exec } from "https://deno.land/x/exec/mod.ts";
import { dirname, fromFileUrl, join } from "https://deno.land/std/path/mod.ts";
import os from "https://deno.land/x/dos@v0.11.0/mod.ts";

export const openTerminal = async (path: string) => {
  if (os.platform() === "windows") {
    await exec("cmd.exe /C start cd " + path);
  } else {
    console.log("open terminal");
  }
};

export const openExplorer = async (path: string) => {
  if (os.platform() === "windows") {
    await exec("explorer.exe " + path);
  } else {
    console.log("open explorer");
  }
};

export const openBlender = async (path: string) => {
  if (os.platform() === "windows") {
    await exec("cmd.exe /C start " + path);
  } else {
    console.log("open Blender");
  }
};
