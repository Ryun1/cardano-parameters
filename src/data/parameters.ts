import { CardanoParameter } from '../types';

export const parameters: CardanoParameter[] = [
  {
    "commonName": "Protocol Major Version",
    "specName": "pv",
    "genesisFileName": "protocolVersion.major",
    "cliName": "protocolVersion.major",
    "dbSyncName": "protocol_major",
    "constitutionName": "major protocol version",
    "definition": "todo",
    "eraAdded": "Shelley"
  },
  {
    "commonName": "Protocol Minor Version",
    "specName": "pv",
    "genesisFileName": "protocolVersion.minor",
    "cliName": "protocolVersion.minor",
    "dbSyncName": "protocol_minor",
    "constitutionName": "minor protocol version",
    "definition": "todo",
    "eraAdded": "Shelley"
  },
  {
    "commonName": "K",
    "specName": "nOpt",
    "genesisFileName": "k in byron, nOpt in shelley",
    "cliName": "stakePoolTargetNum",
    "dbSyncName": "optimal_pool_count",
    "constitutionName": "*stakePoolTargetNum*",
    "definition": "Target number of pools. Impacts saturation threshold, encouraging growth in number of stake pools.",
    "eraAdded": "Byron"
  },
  {
    "commonName": "Influence Factor",
    "specName": "a0",
    "genesisFileName": "a0",
    "cliName": "poolPledgeInfluence",
    "dbSyncName": "influence",
    "constitutionName": "*poolPledgeInfluence*",
    "definition": "Influence Factor governs how much impact the pledge has on rewards.",
    "eraAdded": "Shelley"
  },
  {
    "commonName": "Minimum Pool Cost",
    "specName": "minPoolCost",
    "genesisFileName": "minPoolCost",
    "cliName": "minPoolCost",
    "dbSyncName": "min_pool_cost",
    "constitutionName": "*minPoolCost*",
    "definition": "Minimum Pool Cost per epoch (in lovelace). Enables pledge effect.",
    "eraAdded": "Shelley"
  },
  {
    "commonName": "Decentralisation Parameter",
    "specName": "d",
    "genesisFileName": "decentralisationParam",
    "dbSyncName": "decentralisation",
    "constitutionName": "N/A",
    "definition": "Level of decentralisation.",
    "eraAdded": "Shelley",
    "eraRemoved": "Babbage"
  },
  {
    "commonName": "Maximum Block Body Size",
    "specName": "maxBlockSize",
    "genesisFileName": "maxBlockBodySize",
    "cliName": "maxBlockBodySize",
    "dbSyncName": "max_block_size",
    "constitutionName": "*maxBlockBodySize*",
    "definition": "Maximum size of a block body. Limits blockchain storage size, and communication costs.",
    "eraAdded": "Byron"
  },
  {
    "commonName": "Maximum Block Header Size",
    "specName": "maxHeaderSize",
    "genesisFileName": "maxBlockHeaderSize",
    "cliName": "maxBlockHeaderSize",
    "dbSyncName": "max_bh_size",
    "constitutionName": "maxBlockHeaderSize",
    "definition": "Maximum size of the block header. Should be significantly less than the maximum block size.",
    "eraAdded": "Byron"
  },
  {
    "commonName": "Maximum Transaction Size",
    "specName": "maxTxSize",
    "genesisFileName": "maxTxSize",
    "cliName": "maxTxSize",
    "dbSyncName": "max_tx_size",
    "constitutionName": "*maxTxSize*",
    "definition": "Maximum size of a transaction. Several transactions may be included in a block. Must be strictly less than the max. block body size.",
    "eraAdded": "Byron"
  },
  {
    "commonName": "Treasury Expansion Rate",
    "specName": "tau (τ)",
    "genesisFileName": "tau",
    "cliName": "treasuryCut",
    "dbSyncName": "treasury_growth_rate",
    "constitutionName": "*treasuryCut*",
    "definition": "Treasury rate. Proportion of total rewards allocated to treasury each epoch before remaining rewards are distributed to pools.",
    "eraAdded": "Shelley"
  },
  {
    "commonName": "Monetary Expansion Rate",
    "specName": "rho (ρ)",
    "genesisFileName": "rho",
    "cliName": "monetaryExpansion",
    "dbSyncName": "monetary_expand_rate",
    "constitutionName": "*monetaryExpansion*",
    "definition": "Monetary expansion rate per epoch. Governs the rewards that are returned from reserves to the ecosystem (treasury, stake pools and delegators).",
    "eraAdded": "Shelley"
  },
  {
    "commonName": "Stake Pool Registration Deposit",
    "specName": "poolDeposit",
    "genesisFileName": "poolDeposit",
    "cliName": "stakePoolDeposit",
    "dbSyncName": "pool_deposit",
    "constitutionName": "*stakePoolDeposit*",
    "definition": "Stake pool registration deposit amount (in Lovelace).",
    "eraAdded": "Shelley"
  },
  {
    "commonName": "Stake Credential Deposit",
    "specName": "keyDeposit",
    "genesisFileName": "keyDeposit",
    "cliName": "stakeAddressDeposit",
    "dbSyncName": "key_deposit",
    "constitutionName": "*stakeAddressDeposit*",
    "definition": "Deposit charged for stake credentials (in Lovelace). Ensures that unused keys are returned, so freeing resources.",
    "eraAdded": "Shelley"
  },
  {
    "commonName": "Minimum Fee A (cost per Byte)",
    "specName": "a",
    "genesisFileName": "minFeeA",
    "cliName": "txFeePerByte",
    "dbSyncName": "min_fee_a",
    "constitutionName": "*txFeePerByte*",
    "definition": "Additional transaction fee per byte of data (in lovelace).",
    "eraAdded": "Shelley"
  },
  {
    "commonName": "Minimum Fee B (fixed fee)",
    "specName": "b",
    "genesisFileName": "minFeeB",
    "cliName": "txFeeFixed",
    "dbSyncName": "min_fee_b",
    "constitutionName": "*txFeeFixed*",
    "definition": "Minimum transaction fee constant (in lovelace).",
    "eraAdded": "Shelley"
  },
  {
    "commonName": "Minimum UTxO Value",
    "specName": "minUTxOValue",
    "genesisFileName": "minUTxOValue",
    "dbSyncName": "min_utxo_value",
    "constitutionName": "N/A",
    "definition": "Minimum allowed value in a UTxO. Security-related parameter used to prevent the creation of many small UTxOs that could use excessive resource. Replaced by lovelacePerUTxOWord.",
    "eraAdded": "Shelley",
    "eraRemoved": "Alonzo"
  },
  {
    "commonName": "Extra Entropy",
    "specName": "extraEntropy",
    "genesisFileName": "extraEntropy",
    "dbSyncName": "extra_entropy",
    "constitutionName": "N/A",
    "definition": "Should additional entropy be included in the initial phases. Provides certainty the chain wasn't compromised by seed holders. Redundant later.",
    "eraAdded": "Shelley",
    "eraRemoved": "Babbage"
  },
  {
    "commonName": "Maximum Epochs for Pool Retirement",
    "specName": "Emax",
    "genesisFileName": "eMax",
    "cliName": "poolRetireMaxEpoch",
    "dbSyncName": "max_epoch",
    "constitutionName": "*poolRetireMaxEpoch*",
    "definition": "Maximum number of epochs within which a pool can be announced to retire, starting from the next epoch.",
    "eraAdded": "Shelley"
  },
  {
    "commonName": "Lovelace per UTxO byte",
    "specName": "coinsPerUTxOWord",
    "genesisFileName": "lovelacePerUTxOWord",
    "cliName": "utxoCostPerByte",
    "dbSyncName": "coins_per_utxo_size",
    "definition": "Deposit charged per word of UTxO storage. Replaces Minimum UTxO Value. Implementation changes in babbage.",
    "eraAdded": "Alonzo"
  },
  {
    "commonName": "Plutus Execution Unit Price (Memory)",
    "specName": "prices todo",
    "genesisFileName": "executionPrices.prMem",
    "cliName": "executionUnitPrices.priceMemory",
    "dbSyncName": "price_mem",
    "constitutionName": "*executionUnitPrices[priceMemory]*",
    "definition": "Fee per Plutus execution per memory unit.",
    "eraAdded": "Alonzo"
  },
  {
    "commonName": "Plutus Execution Unit Price (Steps)",
    "specName": "prices todo",
    "genesisFileName": "executionPrices.prSteps",
    "cliName": "executionUnitPrices.priceSteps",
    "dbSyncName": "price_step",
    "constitutionName": "*executionUnitPrices[priceSteps]*",
    "definition": "Fee per Plutus execution per step.",
    "eraAdded": "Alonzo"
  },
  {
    "commonName": "Maximum Transaction Plutus Execution Memory Units",
    "specName": "maxTxExUnits",
    "genesisFileName": "maxTxExUnits.exUnitsMem",
    "cliName": "maxTxExecutionUnits.memory",
    "dbSyncName": "max_tx_ex_mem",
    "constitutionName": "*maxTxExecutionUnits[steps]*",
    "definition": "Maximum number of memory units in a single transaction.",
    "eraAdded": "Alonzo"
  },
  {
    "commonName": "Maximum Transaction Plutus Execution Steps",
    "specName": "maxTxExUnits",
    "genesisFileName": "maxTxExUnits.exUnitsSteps",
    "cliName": "maxTxExecutionUnits.steps",
    "dbSyncName": "max_tx_ex_steps",
    "constitutionName": "*maxTxExecutionUnits[memory]*",
    "definition": "Maximum number of steps units in a single transaction.",
    "eraAdded": "Alonzo"
  },
  {
    "commonName": "Maximum Block Plutus Execution Memory Units",
    "specName": "maxBlockExUnits",
    "genesisFileName": "maxBlockExUnits.exUnitsMem",
    "cliName": "maxBlockExecutionUnits.memory",
    "dbSyncName": "max_block_ex_mem",
    "constitutionName": "*maxBlockExecutionUnits[memory]*",
    "definition": "Maximum number of memory units in a single block.",
    "eraAdded": "Alonzo"
  },
  {
    "commonName": "Maximum Block Plutus Execution Step Units",
    "specName": "maxBlockExUnits",
    "genesisFileName": "maxBlockExUnits.exUnitsSteps",
    "cliName": "maxBlockExecutionUnits.steps",
    "dbSyncName": "max_block_ex_steps",
    "constitutionName": "*maxBlockExecutionUnits[steps]*",
    "definition": "Maximum number of steps units in a single block.",
    "eraAdded": "Alonzo"
  },
  {
    "commonName": "Maximum Value Size",
    "specName": "maxValSize",
    "genesisFileName": "maxValueSize",
    "cliName": "maxValueSize",
    "dbSyncName": "max_val_size",
    "constitutionName": "*maxValueSize*",
    "definition": "The limit on the serialized size of the Value in each output.",
    "eraAdded": "Alonzo"
  },
  {
    "commonName": "Collateral Percentage",
    "specName": "collateralPercent",
    "genesisFileName": "collateralPercentage",
    "cliName": "collateralPercentage",
    "dbSyncName": "collateral_percent",
    "constitutionName": "*collateralPercentage*",
    "definition": "Percentage of fee that is used as collateral for a failed transaction.",
    "eraAdded": "Alonzo"
  },
  {
    "commonName": "Maximum number of collateral inputs",
    "specName": "maxCollateralInputs",
    "genesisFileName": "maxCollateralInputs",
    "cliName": "maxCollateralInputs",
    "dbSyncName": "max_collateral_inputs",
    "constitutionName": "*maxCollateralInputs*",
    "definition": "Maximum number of collateral inputs in a transaction.",
    "eraAdded": "Alonzo"
  },
  {
    "commonName": "Plutus Cost Models",
    "specName": "costmdls",
    "genesisFileName": "costModels",
    "cliName": "costModels",
    "dbSyncName": "",
    "constitutionName": "*costModels*",
    "definition": "Detailed cost models for each Plutus version.",
    "eraAdded": "Alonzo"
  },
  {
    "commonName": "Stake Pool Voting Threshold for Motion No Confidence",
    "specName": "Q1",
    "genesisFileName": "poolVotingThresholds.motionNoConfidence",
    "cliName": "poolVotingThresholds.motionNoConfidence",
    "dbSyncName": "pvt_motion_no_confidence",
    "constitutionName": "*pvtMotionNoConfidence*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "Stake Pool Voting Threshold for New Committee (normal state)",
    "specName": "Q2a",
    "genesisFileName": "poolVotingThresholds.committeeNormal",
    "cliName": "poolVotingThresholds.committeeNormal",
    "dbSyncName": "pvt_committee_normal",
    "constitutionName": "*pvtCommitteeNormal*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "Stake Pool Voting Threshold for New Committee (state of no-confidence)",
    "specName": "Q2b",
    "genesisFileName": "poolVotingThresholds.committeeNoConfidence",
    "cliName": "poolVotingThresholds.committeeNoConfidence",
    "dbSyncName": "pvt_committee_no_confidence",
    "constitutionName": "**pvtCommitteeNoConfidence**",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "Stake Pool Voting Threshold for Hard Fork Initiation",
    "specName": "Q4",
    "genesisFileName": ".hardForkInitiation",
    "cliName": "poolVotingThresholds.hardForkInitiation",
    "dbSyncName": "pvt_hard_fork_initiation",
    "constitutionName": "*pvtHardForkInitiation*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "DRep Voting Threshold for Motion No Confidence",
    "specName": "P1",
    "genesisFileName": "dRepVotingThresholds.motionNoConfidence",
    "cliName": "dRepVotingThresholds.motionNoConfidence",
    "dbSyncName": "dvt_motion_no_confidence",
    "constitutionName": "*dvtMotionNoConfidence*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "DRep Voting Threshold for New Committee (normal state)",
    "specName": "P2a",
    "genesisFileName": "dRepVotingThresholds.committeeNormal",
    "cliName": "dRepVotingThresholds.committeeNormal",
    "dbSyncName": "dvt_committee_normal",
    "constitutionName": "*dvtCommitteeNormal*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "DRep Voting Threshold for New Committee (state of no-confidence)",
    "specName": "P2b",
    "genesisFileName": "dRepVotingThresholds.committeeNoConfidence",
    "cliName": "dRepVotingThresholds.committeeNoConfidence",
    "dbSyncName": "dvt_committee_no_confidence",
    "constitutionName": "dvtCommitteeNoConfidence",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "DRep Voting Threshold for New Constitution or Guardrails Script",
    "specName": "P3",
    "genesisFileName": "dRepVotingThresholds.updateToConstitution",
    "cliName": "dRepVotingThresholds.updateToConstitution",
    "dbSyncName": "dvt_update_to_constitution",
    "constitutionName": "*dvtUpdateToConstitution*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "DRep Voting Threshold for Hard Fork Initiation",
    "specName": "P4",
    "genesisFileName": "dRepVotingThresholds.hardForkInitiation",
    "cliName": "dRepVotingThresholds.hardForkInitiation",
    "dbSyncName": "dvt_hard_fork_initiation",
    "constitutionName": "*dvtHardForkInitiation*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "DRep Voting Threshold for Protocol parameter changes (network group)",
    "specName": "P5a",
    "genesisFileName": "dRepVotingThresholds.ppNetworkGroup",
    "cliName": "dRepVotingThresholds.ppNetworkGroup",
    "dbSyncName": "dvt_p_p_network_group",
    "constitutionName": "*dvtPPNetworkGroup*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "DRep Voting Threshold for Protocol parameter changes (economic group)",
    "specName": "P5b",
    "genesisFileName": "dRepVotingThresholds.ppEconomicGroup",
    "cliName": "dRepVotingThresholds.ppEconomicGroup",
    "dbSyncName": "dvt_p_p_economic_group",
    "constitutionName": "*dvtPPEconomicGroup*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "DRep Voting Threshold for Protocol parameter changes (technical group)",
    "specName": "P5c",
    "genesisFileName": "dRepVotingThresholds.ppTechnicalGroup",
    "cliName": "dRepVotingThresholds.ppTechnicalGroup",
    "dbSyncName": "dvt_p_p_technical_group",
    "constitutionName": "*dvtPPTechnicalGroup*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "DRep Voting Threshold for Protocol parameter changes (governance group)",
    "specName": "P5d",
    "genesisFileName": "dRepVotingThresholds.ppGovGroup",
    "cliName": "dRepVotingThresholds.ppGovGroup",
    "dbSyncName": "dvt_p_p_gov_group",
    "constitutionName": "*dvtPPGovGroup*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "DRep Voting Threshold for Treasury Withdrawal",
    "specName": "P6",
    "genesisFileName": "dRepVotingThresholds.treasuryWithdrawal",
    "cliName": "dRepVotingThresholds.treasuryWithdrawal",
    "dbSyncName": "dvt_treasury_withdrawal",
    "constitutionName": "*dvtTreasuryWithdrawal*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "Minimum Constitutional Committee Size",
    "specName": "ccMinSize",
    "genesisFileName": "committeeMinSize",
    "cliName": "committeeMinSize",
    "dbSyncName": "committee_min_size",
    "constitutionName": "*committeeMinSize*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "Maximum Term Limit for Constitutional Committee",
    "specName": "ccMaxTermLength",
    "genesisFileName": "committeeMaxTermLength",
    "cliName": "committeeMaxTermLength",
    "dbSyncName": "committee_max_term_length",
    "constitutionName": "*committeeMaxTermLength*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "Governance Action Lifetime",
    "specName": "govActionLifetime",
    "genesisFileName": "govActionLifetime",
    "cliName": "govActionLifetime",
    "dbSyncName": "gov_action_lifetime",
    "constitutionName": "*govActionLifetime*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "Governance Action Deposit",
    "specName": "govActionDeposit",
    "genesisFileName": "govActionDeposit",
    "cliName": "govActionDeposit",
    "dbSyncName": "gov_action_deposit",
    "constitutionName": "*govActionDeposit*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "DRep Registration Deposit",
    "specName": "drepDeposit",
    "genesisFileName": "dRepDeposit",
    "cliName": "dRepDeposit",
    "dbSyncName": "drep_deposit",
    "constitutionName": "*dRepDeposit*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "DRep Activity Threshold",
    "specName": "drepActivity",
    "genesisFileName": "dRepActivity",
    "cliName": "dRepActivity",
    "dbSyncName": "drep_activity",
    "constitutionName": "*dRepActivity*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "Stake Pool Voting Threshold for Protocol Parameter Changes (Security Group)",
    "specName": "Q5",
    "genesisFileName": "poolVotingThresholds.ppSecurityGroup",
    "cliName": "poolVotingThresholds.ppSecurityGroup",
    "dbSyncName": "pvtpp_security_group",
    "constitutionName": "*pvtPPSecurityGroup*",
    "definition": "",
    "eraAdded": "Conway"
  },
  {
    "commonName": "Minimum Fee For Reference Script Cost Per Byte",
    "specName": "minFeeRefScriptCoinsPerByte",
    "genesisFileName": "minFeeRefScriptCostPerByte",
    "cliName": "minFeeRefScriptCostPerByte",
    "dbSyncName": "min_fee_ref_script_cost_per_byte",
    "constitutionName": "minFeeRefScriptCoinsPerByte",
    "definition": "",
    "eraAdded": "Conway"
  }
]; 