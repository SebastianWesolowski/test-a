---
inject: true
to: src/<%= category %>/index.ts
append: true
---
export * from "./<%= component_name %>";