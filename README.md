Syncing fork with the original repo:

1. Add remote:
`git remote add reppners https://github.com/reppners/ngx-drag-drop`
2. `git fetch reppners`
3. Find the version to merge on https://github.com/reppners/ngx-drag-drop/releases
4. `git merge [tag] --allow-unrelated-histories`
5. Resolve conflicts by accepting incoming changes
