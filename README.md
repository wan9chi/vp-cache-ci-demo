# vp-cache-ci-demo

Minimal experiment proving that the **Vite Task** cache
(`node_modules/.vite/task-cache`) can be persisted and reused across GitHub
Actions runs with `actions/cache`.

- `vp run build` — runner-aware Vite build (cached).
- `vp run greet` — plain `node` task (cached, fully path-portable).

See `.github/workflows/ci.yml`. Uses a `pkg.pr.new` build of `vite-plus` (main)
purely for experimentation.

<!-- run 2: trivial change to a non-input file; tasks should still cache-hit -->
