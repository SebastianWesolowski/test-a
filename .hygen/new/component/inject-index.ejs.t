---
inject: true
to: src/components/index.ts
append: true
skip_if: react-native-fs
---
export * from "./<%= category %>";