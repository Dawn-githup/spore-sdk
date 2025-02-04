import { Config } from '@ckb-lumos/config-manager';
import { CellDep } from '@ckb-lumos/base';
import { ScriptId } from '../types';

export interface SporeConfig<T extends string = string> {
  lumos: Config;
  ckbNodeUrl: string;
  ckbIndexerUrl: string;
  maxTransactionSize?: number;
  defaultTags?: string[];
  scripts: SporeScriptCategories<T>;
}

export type SporeScriptCategories<T extends string> = Record<T, SporeScriptCategory>;

export interface SporeScriptCategory {
  versions: SporeScript[];
}

export interface SporeVersionedScript extends SporeScript {
  versions?: SporeScript[];
}

export type SporeScripts<T extends string> = Record<T, SporeScript>;

export interface SporeScript {
  tags: string[];
  script: ScriptId;
  cellDep: CellDep;
  behaviors?: SporeScriptOptions;
}

export interface SporeScriptOptions {
  lockProxy?: boolean;
  cobuild?: boolean;
}
