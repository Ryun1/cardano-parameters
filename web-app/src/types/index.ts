export type CardanoParameter = {
  commonName: string;
  specName: string;
  genesisFileName: string;
  cliName?: string;
  dbSyncName: string;
  constitutionName?: string;
  definition: string;
  eraAdded: 'Byron' | 'Shelley' | 'Alonzo' | 'Babbage' | 'Conway';
  eraRemoved?: 'Byron' | 'Shelley' | 'Alonzo' | 'Babbage' | 'Conway';
}; 