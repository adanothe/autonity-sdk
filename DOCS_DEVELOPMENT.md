# Documentation Development Guide

This guide explains how to work with the Autonity SDK documentation system.

## Overview

The documentation system is built using:
- **TypeScript** source code with JSDoc comments
- **Automated generation** from TypeScript files
- **Jekyll** for static site generation
- **GitHub Pages** for hosting
- **GitHub Actions** for automated deployment

## Documentation Structure

```
docs/
├── _config.yml           # Jekyll configuration
├── index.md              # Homepage
├── installation.md       # Installation guide
├── README.md             # Main documentation entry
├── api/                  # API documentation (auto-generated)
│   ├── README.md
│   ├── contract.md
│   ├── autonity.md
│   ├── oracle.md
│   └── ...
├── examples/             # Usage examples
│   ├── README.md
│   ├── basic-usage.md
│   ├── advanced-usage.md
│   └── error-handling.md
└── types/                # Type definitions (auto-generated)
    ├── README.md
    ├── autonity-type.md
    ├── oracle-type.md
    └── ...
```

## Development Workflow

### 1. Update JSDoc Comments

Add or update JSDoc comments in TypeScript source files:

```typescript
/**
 * Creates a new validator registration.
 * 
 * @param enode - The validator's enode URL
 * @param oracleAddress - Oracle server address
 * @param consensusKey - BLS public key for consensus
 * @param signatures - Proof of ownership signatures
 * @returns Promise resolving to transaction response
 * 
 * @example
 * ```typescript
 * const tx = await contract.autonity.registerValidator(
 *   "enode://...",
 *   "0x...",
 *   "0x...",
 *   "0x..."
 * );
 * await tx.wait();
 * ```
 */
async registerValidator(/* ... */) {
  // implementation
}
```

### 2. Generate Documentation

Run the documentation generator:

```bash
npm run docs:generate
```

This will:
- Scan all TypeScript files in `src/`
- Extract JSDoc comments and type information
- Generate markdown files in `docs/api/` and `docs/types/`
- Create comprehensive API documentation

### 3. Validate Documentation

Check for issues:

```bash
npm run docs:validate
```

This validates:
- Directory structure
- Required files existence
- Jekyll front matter
- Markdown link integrity
- Navigation structure

### 4. Build Complete Documentation

Generate and validate in one command:

```bash
npm run docs:build
```

### 5. Serve Locally (Optional)

If you have Jekyll installed:

```bash
npm run docs:serve
```

Then visit `http://localhost:4000` to preview the documentation.

## Writing Good JSDoc

### Method Documentation

```typescript
/**
 * Brief description of what the method does.
 * 
 * Longer description with more details if needed.
 * Can include multiple paragraphs.
 * 
 * @param paramName - Description of the parameter
 * @param optionalParam - Description (optional parameter)
 * @returns Description of return value
 * @throws {ErrorType} When this error occurs
 * 
 * @example
 * Basic usage:
 * ```typescript
 * const result = await method(param1, param2);
 * ```
 * 
 * @example
 * Advanced usage:
 * ```typescript
 * try {
 *   const result = await method(param1, param2);
 *   console.log('Success:', result);
 * } catch (error) {
 *   console.error('Failed:', error);
 * }
 * ```
 */
```

### Class Documentation

```typescript
/**
 * Brief description of the class.
 * 
 * Longer description explaining the purpose and usage.
 * 
 * @example
 * Creating an instance:
 * ```typescript
 * const instance = new ClassName(config);
 * ```
 */
export class ClassName {
  // implementation
}
```

### Interface Documentation

```typescript
/**
 * Configuration options for the Contract class.
 * 
 * @interface ContractConfig
 */
export interface ContractConfig {
  /** RPC URL for blockchain connection */
  rpcUrl?: string;
  
  /** Contract address on the blockchain */
  contractAddress: string;
  
  /** Optional private key for transaction signing */
  privateKey?: string;
}
```

## Manual Documentation

### Creating New Guides

1. Create a new markdown file in the appropriate directory
2. Add Jekyll front matter:

```yaml
---
layout: default
title: Guide Title
parent: Parent Section
nav_order: 5
---
```

3. Use standard markdown with Jekyll enhancements:

```markdown
# Guide Title
{: .no_toc }

Brief description of the guide.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Section 1

Content here...
```

### Adding Examples

Create practical examples that users can copy and use:

```markdown
## Real-world Example

Here's how to implement a validator monitoring dashboard:

```typescript
import { Contract } from 'autonity-sdk';

class ValidatorMonitor {
  constructor(private contract: Contract) {}
  
  async getValidatorStats() {
    const validators = await this.contract.autonity.getValidators();
    const committee = await this.contract.autonity.getCommittee();
    
    return {
      total: validators.length,
      active: committee.length,
      validators: validators.map(addr => ({
        address: addr,
        inCommittee: committee.some(c => c.address === addr)
      }))
    };
  }
}
```
```

## Jekyll Configuration

### Navigation

Update `_config.yml` to control navigation:

```yaml
# Navigation structure
nav_sort: case_insensitive
nav_fold: true

# Collections for organized content
collections:
  api:
    output: true
    permalink: /:collection/:name/
```

### Page Front Matter

Standard front matter for documentation pages:

```yaml
---
layout: default
title: Page Title
parent: Parent Section    # For nested pages
nav_order: 1             # Controls order in navigation
has_children: true       # If this page has sub-pages
permalink: /custom-url/  # Custom URL (optional)
---
```

## Automation

### GitHub Actions

The documentation is automatically built and deployed via GitHub Actions:

```yaml
# .github/workflows/docs.yml
name: Build and Deploy Documentation

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run docs:build
      - uses: actions/deploy-pages@v4
```

### Pre-commit Hooks

Consider adding pre-commit hooks to validate documentation:

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm run docs:validate"
    }
  }
}
```

## Best Practices

### 1. Keep JSDoc Up to Date

- Update JSDoc when changing method signatures
- Add examples for complex operations
- Document error conditions and edge cases

### 2. Write User-Focused Examples

- Show real-world usage scenarios
- Include error handling
- Provide complete, runnable examples

### 3. Maintain Navigation

- Use consistent nav_order values
- Group related content under parent sections
- Keep navigation hierarchy shallow (max 2-3 levels)

### 4. Test Documentation

- Regularly run `npm run docs:validate`
- Test examples to ensure they work
- Check links and references

### 5. Version Documentation

- Update documentation with each release
- Note breaking changes clearly
- Maintain backwards compatibility examples

## Troubleshooting

### Common Issues

1. **Jekyll build fails**
   - Check `_config.yml` syntax
   - Ensure all front matter is valid YAML
   - Verify file encoding is UTF-8

2. **Missing documentation**
   - Check TypeScript compilation
   - Verify JSDoc comments are valid
   - Run `npm run docs:generate` to regenerate

3. **Broken links**
   - Run `npm run docs:validate`
   - Check relative paths
   - Ensure referenced files exist

4. **Navigation issues**
   - Check `nav_order` values
   - Verify parent-child relationships
   - Ensure `has_children` is set correctly

### Debug Mode

Enable verbose output during generation:

```bash
DEBUG=1 npm run docs:generate
```

## Deployment

### GitHub Pages

Documentation is automatically deployed to GitHub Pages when:
- Changes are pushed to the main branch
- GitHub Actions workflow completes successfully
- Pages service is enabled in repository settings

### Manual Deployment

For manual deployment to other platforms:

```bash
# Generate documentation
npm run docs:build

# Build Jekyll site
cd docs
bundle exec jekyll build

# Deploy _site directory to your hosting platform
```

## Contributing

When contributing to documentation:

1. Update relevant JSDoc comments
2. Run `npm run docs:build` to regenerate
3. Test examples and verify links
4. Submit PR with both code and documentation changes

This ensures documentation stays in sync with code changes.
