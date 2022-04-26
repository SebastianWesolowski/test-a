---
inject: true
to: src/<%= category %>/index.ts
append: true
skip_if: "<%= category === `pages` ? true : false %>"
---
export * from "./<%= component_name %>";