# Cardano Parameters

This repository contains Cardano's protocol parameters and their definitions, along with a web interface to explore them.

## Repository Structure

```
cardano-parameters/
├── updatable-params.json     # Core parameter definitions
├── updatable-params.schema.json  # JSON schema for parameters
├── web/                      # Next.js web application
│   ├── src/                  # Source code
│   ├── public/              # Static assets
│   └── package.json         # Node.js dependencies
└── LICENSE                  # License information
```

## Development

### Parameter Data
The parameter definitions are stored in `updatable-params.json` and follow the schema defined in `updatable-params.schema.json`.

### Web Interface
The web interface is built with Next.js and is located in the `web` directory.

To run the web interface locally:

```bash
cd web
npm install
npm run dev
```

Visit http://localhost:3000 to view the application.

## Deployment

The web interface is automatically deployed to Vercel when changes are pushed to the main branch.

## License

See [LICENSE](LICENSE) file for details.