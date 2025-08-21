# Documentation Development Guide

This guide explains how to work with the Autonity SDK documentation system.

## Overview

The documentation is built using:
- **Jekyll** - Static site generator
- **Just the Docs** - Jekyll theme optimized for documentation
- **TypeScript** - Auto-generation from JSDoc comments
- **GitHub Pages** - Hosting and deployment

## Quick Start

### Prerequisites

1. **Node.js** (v16+) and npm
2. **Ruby** (v2.7+) and bundler (for local Jekyll development)
3. **Git** (for version control)

### Setup

```bash
# Install Node.js dependencies
npm install

# Install Ruby dependencies (for local development)
bundle install

# Generate documentation
npm run docs:generate

# Validate documentation
npm run docs:validate

# Serve locally (requires Ruby/Jekyll)
npm run docs:serve
```

## Scripts

### Documentation Generation

```bash
# Generate all documentation from TypeScript source
npm run docs:generate

# Validate generated documentation
npm run docs:validate

# Build and validate (recommended)
npm run docs:build
```

### Local Development

```bash
# Serve documentation locally with hot reload
npm run docs:serve
# or
bundle exec jekyll serve --source docs

# Full development workflow
npm run docs:dev
```

## File Structure

```
docs/
├── _config.yml                 # Jekyll configuration
├── index.md                    # Homepage
├── installation.md             # Installation guide
├── README.md                   # Main documentation (same as index)
├── api/                        # API documentation
│   ├── README.md              # API overview
│   ├── contract.md            # Contract class
│   ├── autonity.md            # AutonityClient
│   ├── oracle.md              # OracleClient
│   └── ...                    # Other API files
├── examples/                   # Usage examples
│   ├── README.md              # Examples overview
│   ├── basic-usage.md         # Basic usage guide
│   ├── advanced-usage.md      # Advanced patterns
│   └── error-handling.md      # Error handling guide
├── types/                      # Type documentation
│   ├── README.md              # Types overview
│   ├── autonity-type.md       # Autonity types
│   ├── oracle-type.md         # Oracle types
│   └── autonity-event-model.md # Event types
└── assets/                     # Static assets (if any)
```

## Automatic Generation

The documentation is automatically generated from:

1. **JSDoc comments** in TypeScript source files
2. **devdoc/userdoc** JSON files from contract compilation
3. **Manual content** for guides and examples

### Source Files

- `src/contracts/*.ts` → `docs/api/*.md`
- `src/types/*.ts` → `docs/types/*.md`
- `src/core/*.ts` → `docs/api/*.md`

### Generation Process

1. **TypeScript Analysis**: Parse source files using ts-morph
2. **JSDoc Extraction**: Extract comments, parameters, returns, examples
3. **Markdown Generation**: Convert to Jekyll-compatible markdown
4. **Front Matter**: Add Jekyll navigation metadata

## Jekyll Configuration

### Theme: Just the Docs

- **Navigation**: Automatic based on `nav_order` and `parent`
- **Search**: Built-in search functionality
- **Responsive**: Mobile-friendly design
- **Code Highlighting**: Syntax highlighting for TypeScript

### Front Matter

Every documentation page should include:

```yaml
---
layout: default
title: Page Title
parent: Parent Section  # Optional
nav_order: 1           # Optional
has_children: true     # For section pages
---
```

### Navigation Structure

```
Home (nav_order: 0)
├── Installation & Setup (nav_order: 1)
├── API Reference (nav_order: 2, has_children: true)
│   ├── Contract (nav_order: 1)
│   ├── AutonityClient (nav_order: 2)
│   └── OracleClient (nav_order: 3)
├── Type Definitions (nav_order: 3, has_children: true)
└── Examples (nav_order: 4, has_children: true)
```

## GitHub Pages Deployment

### Automatic Deployment

The documentation is automatically deployed via GitHub Actions:

1. **Trigger**: Push to main/master branch
2. **Build**: Generate docs, build Jekyll site
3. **Deploy**: Publish to GitHub Pages

### Workflow File

See `.github/workflows/docs.yml` for the complete workflow.

### Manual Deployment

```bash
# Generate documentation
npm run docs:build

# Commit changes
git add docs/
git commit -m "Update documentation"
git push origin main
```

## Writing Documentation

### API Documentation

API documentation is auto-generated from JSDoc comments:

```typescript
/**
 * Description of the method functionality.
 * 
 * @param paramName - Description of parameter
 * @returns Description of return value
 * @example
 * ```typescript
 * const result = await contract.method(param);
 * console.log(result);
 * ```
 */
async method(paramName: string): Promise<ReturnType> {
  // Implementation
}
```

### Manual Content

For guides and examples, create markdown files with proper front matter:

```markdown
---
layout: default
title: Guide Title
parent: Examples
nav_order: 1
---

# Guide Title

Content goes here...
```

### Best Practices

1. **Clear Titles**: Use descriptive, hierarchical titles
2. **Code Examples**: Include practical, working examples
3. **Cross-References**: Link between related sections
4. **Error Handling**: Document error scenarios
5. **Type Safety**: Show TypeScript usage patterns

## Validation

### Automated Checks

The validation script checks:

- Required files and directories exist
- Jekyll front matter is valid
- Markdown links are not broken
- Navigation structure is correct

### Manual Review

Before publishing:

1. Test examples in the documentation
2. Verify links work correctly
3. Check responsive design
4. Validate search functionality

## Troubleshooting

### Common Issues

1. **Jekyll Build Errors**: Check Ruby/bundler installation
2. **Missing Front Matter**: Ensure all .md files have Jekyll headers
3. **Broken Links**: Use relative paths, check file names
4. **Navigation Issues**: Verify nav_order and parent relationships

### Debug Mode

```bash
# Verbose Jekyll output
bundle exec jekyll serve --source docs --verbose

# Check Jekyll configuration
bundle exec jekyll doctor --source docs
```

## Contributing

When updating documentation:

1. Make changes to source code JSDoc comments OR
2. Edit markdown files directly in `docs/`
3. Run `npm run docs:build` to regenerate and validate
4. Test locally with `npm run docs:serve`
5. Commit both source and generated documentation

## Maintenance

### Regular Tasks

- Update dependencies in `package.json` and `Gemfile`
- Regenerate docs when adding new features
- Validate links and examples periodically
- Update GitHub Pages settings as needed

### Version Updates

When releasing new SDK versions:

1. Update version references in documentation
2. Add changelog/release notes
3. Update example code if APIs changed
4. Regenerate all documentation
