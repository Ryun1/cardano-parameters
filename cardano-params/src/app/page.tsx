'use client';

import { useState } from 'react';
import { parameters } from '../data/parameters';
import { CardanoParameter } from '../types';

const eraColors = {
  Byron: 'bg-blue-50 border-blue-200',
  Shelley: 'bg-purple-50 border-purple-200',
  Alonzo: 'bg-green-50 border-green-200',
  Babbage: 'bg-orange-50 border-orange-200',
  Conway: 'bg-pink-50 border-pink-200',
};

const eraTextColors = {
  Byron: 'text-blue-800',
  Shelley: 'text-purple-800',
  Alonzo: 'text-green-800',
  Babbage: 'text-orange-800',
  Conway: 'text-pink-800',
};

const eraBgColors = {
  Byron: 'bg-blue-100',
  Shelley: 'bg-purple-100',
  Alonzo: 'bg-green-100',
  Babbage: 'bg-orange-100',
  Conway: 'bg-pink-100',
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [showSpecs, setShowSpecs] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showGenesis, setShowGenesis] = useState(false);
  const [showCIPs, setShowCIPs] = useState(false);
  const [showConstitution, setShowConstitution] = useState(false);

  const filteredParameters = parameters.filter((param) => {
    const matchesSearch = 
      param.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      param.specName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      param.definition.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesEra = selectedEra === 'all' || param.eraAdded === selectedEra;

    return matchesSearch && matchesEra;
  });

  const eras = ['all', 'Byron', 'Shelley', 'Alonzo', 'Babbage', 'Conway'];

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Cardano's Parameters
        </h1>
        <p className="text-gray-600 mb-4">Explore and search through Cardano's updatable protocol parameters</p>

        {/* Context Information Section */}
        <div className="mb-8 space-y-4">
          {/* Formal Specifications */}
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <button 
              onClick={() => setShowSpecs(!showSpecs)}
              className="flex justify-between w-full items-center text-left"
            >
              <span className="text-lg font-semibold text-gray-900">📚 Formal Specifications</span>
              <span className="text-blue-600">{showSpecs ? '▼' : '▶'}</span>
            </button>
            {showSpecs && (
              <div className="mt-4 space-y-2 pl-4">
                <a href="https://github.com/intersectmbo/cardano-ledger/releases/latest/download/byron-ledger.pdf" 
                   className="block text-blue-600 hover:underline">Byron Specification</a>
                <a href="https://github.com/intersectmbo/cardano-ledger/releases/latest/download/shelley-ledger.pdf" 
                   className="block text-blue-600 hover:underline">Shelley Specification</a>
                <a href="https://github.com/intersectmbo/cardano-ledger/releases/latest/download/alonzo-ledger.pdf" 
                   className="block text-blue-600 hover:underline">Alonzo Specification</a>
                <a href="https://github.com/intersectmbo/cardano-ledger/releases/latest/download/babbage-ledger.pdf" 
                   className="block text-blue-600 hover:underline">Babbage Specification</a>
                <a href="https://intersectmbo.github.io/formal-ledger-specifications/conway-ledger.pdf" 
                   className="block text-blue-600 hover:underline">Conway Specification</a>
              </div>
            )}
          </div>

          {/* Constitution */}
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <button 
              onClick={() => setShowConstitution(!showConstitution)}
              className="flex justify-between w-full items-center text-left"
            >
              <span className="text-lg font-semibold text-gray-900">📜 Constitution</span>
              <span className="text-blue-600">{showConstitution ? '▼' : '▶'}</span>
            </button>
            {showConstitution && (
              <div className="mt-4 space-y-2 pl-4">
                <div className="space-y-2">
                  <a href="ipfs://bafkreiazhhawe7sjwuthcfgl3mmv2swec7sukvclu3oli7qdyz4uhhuvmy" 
                     className="block text-blue-600 hover:underline">Current Constitution (IPFS)</a>
                  <p className="text-sm text-gray-600 font-mono break-all">
                    <span className="font-medium text-gray-700">Hash: </span>
                    2a61e2f4b63442978140c77a70daab3961b22b12b63b13949a390c097214d1c5
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Tools & Versions */}
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <button 
              onClick={() => setShowTools(!showTools)}
              className="flex justify-between w-full items-center text-left"
            >
              <span className="text-lg font-semibold text-gray-900">🛠️ Tools & Versions</span>
              <span className="text-blue-600">{showTools ? '▼' : '▶'}</span>
            </button>
            {showTools && (
              <div className="mt-4 space-y-2 pl-4">
                <p className="text-gray-700">
                  <span className="font-medium">Cardano CLI:</span> 10.0.0.0 - darwin-x86_64 - ghc-8.10
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">DB-Sync:</span> 13.6.0.5
                </p>
              </div>
            )}
          </div>

          {/* Genesis Files */}
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <button 
              onClick={() => setShowGenesis(!showGenesis)}
              className="flex justify-between w-full items-center text-left"
            >
              <span className="text-lg font-semibold text-gray-900">🔗 Genesis Files</span>
              <span className="text-blue-600">{showGenesis ? '▼' : '▶'}</span>
            </button>
            {showGenesis && (
              <div className="mt-4 space-y-2 pl-4">
                <a href="https://book.world.dev.cardano.org/environments/mainnet/byron-genesis.json" 
                   className="block text-blue-600 hover:underline">Byron Genesis</a>
                <a href="https://book.world.dev.cardano.org/environments/mainnet/shelley-genesis.json" 
                   className="block text-blue-600 hover:underline">Shelley Genesis</a>
                <a href="https://book.world.dev.cardano.org/environments/mainnet/alonzo-genesis.json" 
                   className="block text-blue-600 hover:underline">Alonzo Genesis</a>
                <a href="https://book.world.dev.cardano.org/environments/mainnet/conway-genesis.json" 
                   className="block text-blue-600 hover:underline">Conway Genesis</a>
              </div>
            )}
          </div>

          {/* CIPs */}
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <button 
              onClick={() => setShowCIPs(!showCIPs)}
              className="flex justify-between w-full items-center text-left"
            >
              <span className="text-lg font-semibold text-gray-900">📋 Cardano Improvement Proposals</span>
              <span className="text-blue-600">{showCIPs ? '▼' : '▶'}</span>
            </button>
            {showCIPs && (
              <div className="mt-4 space-y-2 pl-4">
                <a href="https://github.com/cardano-foundation/CIPs/tree/master/CIP-0009" 
                   className="block text-blue-600 hover:underline">CIP-9: Protocol Parameters (Shelley Era)</a>
                <a href="https://github.com/cardano-foundation/CIPs/tree/master/CIP-0028" 
                   className="block text-blue-600 hover:underline">CIP-28: Protocol Parameters (Alonzo Era)</a>
                <a href="https://github.com/cardano-foundation/CIPs/blob/master/CIP-0055/README.md" 
                   className="block text-blue-600 hover:underline">CIP-55: Protocol Parameters (Babbage Era)</a>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search parameters..."
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            value={selectedEra}
            onChange={(e) => setSelectedEra(e.target.value)}
            className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          >
            {eras.map((era) => (
              <option key={era} value={era}>
                {era.charAt(0).toUpperCase() + era.slice(1)} Era
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-6">
          {filteredParameters.map((param, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-lg p-6 shadow-sm transition-all hover:shadow-md ${eraColors[param.eraAdded as keyof typeof eraColors]}`}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{param.commonName}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${eraBgColors[param.eraAdded as keyof typeof eraBgColors]} ${eraTextColors[param.eraAdded as keyof typeof eraTextColors]}`}>
                  {param.eraAdded} Era
                </span>
                {param.eraRemoved && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    Removed in {param.eraRemoved}
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">Formal Specification Name:</span> {param.specName}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">Genesis File Name:</span> {param.genesisFileName}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">Cardano CLI Name:</span> {param.cliName || 'N/A'}
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">DB-Sync Name:</span> {param.dbSyncName}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">Constitution Name:</span> {param.constitutionName || 'N/A'}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-700 bg-white bg-opacity-50 p-4 rounded-lg">
                    <span className="font-semibold text-gray-900">Definition:</span> {param.definition || 'No definition available.'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
